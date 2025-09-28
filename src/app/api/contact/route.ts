import { NextRequest, NextResponse } from "next/server";
export const runtime = "nodejs";

import sgMail from "@sendgrid/mail";

export async function POST(request: NextRequest) {
  try {
    // Validate and initialize SendGrid configuration at request-time (not module load)
    const apiKey = process.env.SENDGRID_API_KEY_TECHFLOW_CONTACT_PROD || process.env.SENDGRID_API_KEY;
    const toEmail = process.env.SENDGRID_TO_EMAIL;
    const fromEmail = process.env.SENDGRID_FROM_EMAIL;

    if (!apiKey) {
      console.error("Missing SendGrid API key (SENDGRID_API_KEY_TECHFLOW_CONTACT_PROD or SENDGRID_API_KEY)");
      return NextResponse.json(
        { success: false, message: "Email service API key not configured" },
        { status: 500 }
      );
    }

    if (!toEmail || !fromEmail) {
      console.error("Missing SendGrid email configuration (SENDGRID_TO_EMAIL or SENDGRID_FROM_EMAIL)");
      return NextResponse.json(
        { success: false, message: "Email service not fully configured" },
        { status: 500 }
      );
    }

    sgMail.setApiKey(apiKey);

    const { name, email, company, message } = await request.json();

    console.log("Received contact form data:", { name, email, company, message });

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const msg = {
      to: toEmail,
      from: fromEmail,
      replyTo: { email },
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company || "N/A"}
        Message: ${message}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
      // Reduce spam likelihood by disabling tracking and marking as transactional
      trackingSettings: {
        clickTracking: { enable: false, enableText: false },
        openTracking: { enable: false },
      },
      mailSettings: {
        bypassListManagement: { enable: true },
      },
    };

    await sgMail.send(msg as any);
    
    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    const sendgridErrors = (error?.response?.body?.errors) || undefined;
    if (sendgridErrors) {
      console.error("SendGrid error details:", sendgridErrors);
    } else {
      console.error("Contact form error:", error);
    }
    const message = error?.message || "Failed to send email";
    const details = process.env.NODE_ENV !== 'production' ? { sendgridErrors } : undefined;
    return NextResponse.json(
      { success: false, message, ...details },
      { status: 500 }
    );
  }
}

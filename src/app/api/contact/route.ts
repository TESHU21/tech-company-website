import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const company = formData.get("company");
  const message = formData.get("message");

  // Example: send email via SendGrid, Mailgun, or save to DB
  console.log({ name, email, company, message });

  return NextResponse.json({ success: true });
}

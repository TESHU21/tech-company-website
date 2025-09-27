import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import shared UI
import { Header } from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

// ✅ Fix 1: Add metadataBase so OG/Twitter use correct domain
export const metadata: Metadata = {
  metadataBase: new URL("https://techfloweth.netlify.app"), // 👈 your domain
  title: "TechFlow - Building Scalable Cloud & Web Solutions",
  description:
    "Transform your ideas into powerful digital experiences with cutting-edge cloud infrastructure, modern web applications, and data-driven marketing strategies.",
  keywords:
    "web development, cloud solutions, digital marketing, software development, tech consulting",
  authors: [{ name: "TechFlow Team" }],
  creator: "TechFlow",
  publisher: "TechFlow",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techfloweth.netlify.app/",
    title: "TechFlow - Building Scalable Cloud & Web Solutions",
    description:
      "Transform your ideas into powerful digital experiences with cutting-edge cloud infrastructure, modern web applications, and data-driven marketing strategies.",
    siteName: "TechFlow",
    images: [
      {
        url: "/og-image.jpg", // 👈 resolved with metadataBase
        width: 1200,
        height: 630,
        alt: "TechFlow - Building Scalable Cloud & Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechFlow - Building Scalable Cloud & Web Solutions",
    description:
      "Transform your ideas into powerful digital experiences with cutting-edge cloud infrastructure, modern web applications, and data-driven marketing strategies.",
    images: ["/og-image.jpg"],
    creator: "@techflow",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

// ✅ Fix 2: Move viewport out of metadata into its own export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background`}>
        {/* <Header /> */}
        <main className="relative min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

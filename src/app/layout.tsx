import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Import shared UI
import {Header} from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TechFlow - Building Scalable Cloud & Web Solutions',
  description:
    'Transform your ideas into powerful digital experiences with cutting-edge cloud infrastructure, modern web applications, and data-driven marketing strategies.',
  keywords:
    'web development, cloud solutions, digital marketing, software development, tech consulting',
  authors: [{ name: 'TechFlow Team' }],
  creator: 'TechFlow',
  publisher: 'TechFlow',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techflow.com',
    title: 'TechFlow - Building Scalable Cloud & Web Solutions',
    description:
      'Transform your ideas into powerful digital experiences with cutting-edge cloud infrastructure, modern web applications, and data-driven marketing strategies.',
    siteName: 'TechFlow',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TechFlow - Building Scalable Cloud & Web Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechFlow - Building Scalable Cloud & Web Solutions',
    description:
      'Transform your ideas into powerful digital experiences with cutting-edge cloud infrastructure, modern web applications, and data-driven marketing strategies.',
    images: ['/og-image.jpg'],
    creator: '@techflow',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background`}>
        {/* Global background decoration */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-blue-50/30" />
          <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow delay-1000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow delay-2000" />
        </div>

        {/* Shared layout */}
        <Header />
        <main className="relative min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

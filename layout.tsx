import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Mono } from 'next/font/google'

import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const spaceMono = Space_Mono({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Albright Odhiambo - Web Developer, AI & Digital Growth Expert',
  description: 'Building smart digital solutions with Web Development, SEO Optimization & AI. Helping businesses grow online with premium digital services.',
  keywords: ['Web Developer', 'AI Chatbot', 'SEO Optimization', 'Digital Marketing', 'Content Writing', 'Google Maps Business'],
  authors: [{ name: 'Albright Odhiambo' }],
  creator: 'Albright Odhiambo',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://albright.dev',
    title: 'Albright Odhiambo - Web Developer & AI Specialist',
    description: 'Building smart digital solutions with Web Development, SEO Optimization & AI.',
    siteName: 'Albright Odhiambo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Albright Odhiambo - Web Developer & AI Specialist',
    description: 'Building smart digital solutions with Web Development, SEO Optimization & AI.',
  },
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
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark',
  themeColor: '#dc2626',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">{children}</body>
    </html>
  )
}

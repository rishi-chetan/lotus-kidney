import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Spectral } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

import { I18nProvider } from "@/components/providers/i18n-provider"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MedicalBusinessSchema, DoctorSchema } from "@/components/structured-data"
import { siteConfig } from "@/lib/seo-config"

const spectral = Spectral({
  subsets: ["latin"],
  variable: "--font-spectral",
  display: "swap",
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Best Urologist in Hyderabad | Dr. Nitesh Battala`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.doctor.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: `${siteConfig.name} | Best Urologist in Hyderabad`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Best Urologist in Hyderabad`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
    icons: {
      icon: "/favicon.png",
      apple: "/favicon.png",
    },
  verification: {
    google: "RE4uAPKhl0-TqTKY6ckx5l9h9zKK-qGeFxrV8M6lguo",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${spectral.variable}`}>
      <head>
        <MedicalBusinessSchema />
        <DoctorSchema />
      </head>
      <body className="font-sans antialiased">
        <I18nProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Suspense fallback={<div>Loading...</div>}>
              <SiteHeader />
              <main className="min-h-[60vh]">{children}</main>
              <SiteFooter />
            </Suspense>
          </ThemeProvider>
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}

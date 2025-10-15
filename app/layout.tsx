import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Spectral } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

import { ThemeProvider } from "@/components/providers/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const spectral = Spectral({
  subsets: ["latin"],
  variable: "--font-spectral",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Lotus Kidney & Andrology Center",
  description:
    "Comprehensive kidney, urology, and andrology care. Teleconsultation, appointments, and patient resources.",
  generator: "v0.app",
  openGraph: {
    title: "Lotus Kidney & Andrology Center",
    description:
      "Comprehensive kidney, urology, and andrology care. Teleconsultation, appointments, and patient resources.",
    url: "https://lotus-kidney.example.com",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${spectral.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Suspense fallback={<div>Loading...</div>}>
            <SiteHeader />
            <main className="min-h-[60vh]">{children}</main>
            <SiteFooter />
          </Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

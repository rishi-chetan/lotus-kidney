"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { useI18n } from "@/components/providers/i18n-provider"
import { LanguageToggle } from "./language-toggle"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { t } = useI18n()

  const nav = [
    { href: "/", label: t('Navigation.home') },
    { href: "/about", label: t('Navigation.about') },
    { href: "/services", label: t('Navigation.services') },
    { href: "/patient-info", label: t('Navigation.patientInfo') },
    // { href: "/teleconsultation", label: "Teleconsult" }, // Coming Soon
    // { href: "/appointments", label: t('Navigation.appointments') },
    { href: "/blog", label: t('Navigation.blog') },
    { href: "/contact", label: t('Navigation.contact') },
  ]
  
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-0">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <img src="/logo.png" alt="Lotus Kidney & Andrology Logo" className="h-20 w-auto" />
          <span className="text-pretty">Lotus Kidney & Andrology Center</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn("rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground")}
            >
              {item.label}
            </Link>
          ))}
          <LanguageToggle />
          <Button asChild className="ml-2">
            <Link href="/appointments">{t('Navigation.book')}</Link>
          </Button>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle />
          <Button
            variant="ghost"
            className="px-2"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>
      <div id="mobile-menu" hidden={!open} className="border-t bg-background md:hidden">
        <div className="mx-auto grid max-w-6xl gap-1 px-4 py-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm hover:bg-muted"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="w-full">
            <Link href="/appointments" onClick={() => setOpen(false)}>
              {t('Navigation.bookAppointment')}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

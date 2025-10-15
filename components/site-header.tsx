"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import { Menu } from "lucide-react"

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/patient-info", label: "Patient Info" },
  { href: "/teleconsultation", label: "Teleconsult" },
  { href: "/appointments", label: "Appointments" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-block h-6 w-6 rounded-full bg-primary/90" aria-hidden />
          <span className="text-pretty">Lotus Kidney & Andrology</span>
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
          <ThemeToggle />
          <Button asChild className="ml-2">
            <Link href="/appointments">Book</Link>
          </Button>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
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
              Book Appointment
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

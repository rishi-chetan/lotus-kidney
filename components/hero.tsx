"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import doctors from "@/data/doctors.json"
import { useI18n } from "@/components/providers/i18n-provider"

export function Hero() {
  const { t } = useI18n();
  
  return (
    <section className="relative overflow-hidden border-b bg-gradient-to-b from-background to-secondary">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-20">
        <div className="space-y-6">
          <h1 className="text-balance text-4xl font-bold md:text-5xl">
            {t('Hero.heading')}
          </h1>
          <p className="text-pretty text-muted-foreground md:text-lg">
            {t('Hero.description')}
          </p>
          
          <div className="space-y-4 pt-4">
            <div>
              <h3 className="text-xl font-semibold">{doctors[0].name}</h3>
              <p className="text-sm text-muted-foreground whitespace-pre-line">{doctors[0].qualifications}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/appointments">{t('Hero.bookAppointment')}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">{t('Hero.aboutDoctor')}</Link>
            </Button>
            {/* Teleconsultation - Coming Soon */}
            {/* <Button asChild size="lg" variant="outline">
              <Link href="/teleconsultation">Teleconsultation</Link>
            </Button> */}
          </div>
        </div>
        <div className="relative">
          <img
            src="/bablu.png"
            alt="Doctor"
            className="mx-auto w-full max-w-md rounded-xl border md:max-w-none"
          />
          <div
            className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-primary/10"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-8 -right-8 h-16 w-16 rounded-full bg-accent/20"
            aria-hidden
          />
        </div>
      </div>
    </section>
  )
}

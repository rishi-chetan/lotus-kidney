"use client"

import services from "@/data/services.json"
import testimonials from "@/data/testimonials.json"
import { Hero } from "@/components/hero"
import { ServiceCard } from "@/components/cards/service-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { ScheduleTable } from "@/components/schedule/schedule-table"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/components/providers/i18n-provider"

export default function HomePage() {
  const { t } = useI18n();
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">{t('Home.ourMission')}</h2>
            <p className="text-muted-foreground">
              {t('Home.missionDescription')}
            </p>
          </div>
          <ScheduleTable />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">{t('Home.featuredServices')}</h2>
          <Link href="/services" className="text-sm text-primary hover:underline">
            {t('Home.viewAll')}
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="mb-6 text-2xl font-bold">{t('Home.whatPatientsSay')}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard key={testimonial.id} t={testimonial} />
          ))}
        </div>
        <div className="mt-6">
          <Button asChild variant="outline">
            <Link href="/testimonials">{t('Home.readMoreStories')}</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

"use client"

import testimonials from "@/data/testimonials.json"
import { TestimonialCard } from "@/components/testimonial-card"
import { siteConfig } from "@/lib/seo-config"
import { BreadcrumbSchema } from "@/components/structured-data"
import { useI18n } from "@/components/providers/i18n-provider"

export default function TestimonialsPage() {
  const { t } = useI18n();
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Patient Testimonials", url: `${siteConfig.url}/testimonials` },
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h1 className="mb-6 text-3xl font-bold">{t('Testimonials.pageTitle')}</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} t={testimonial} />
          ))}
        </div>
      </div>
    </>
  )
}

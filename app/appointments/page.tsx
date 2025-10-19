"use client"

import { AppointmentForm } from "@/components/forms/appointment-form"
import { siteConfig } from "@/lib/seo-config"
import { BreadcrumbSchema } from "@/components/structured-data"
import { useI18n } from "@/components/providers/i18n-provider"

export default function AppointmentsPage() {
  const { t } = useI18n();
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Book Appointment", url: `${siteConfig.url}/appointments` },
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <h1 className="mb-6 text-3xl font-bold">{t('Appointments.pageTitle')}</h1>
        <p className="mb-6 text-muted-foreground">
          {t('Appointments.description')}
        </p>
        <AppointmentForm />
      </div>
    </>
  )
}

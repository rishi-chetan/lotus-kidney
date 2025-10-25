"use client"

import { ScheduleTable } from "@/components/schedule/schedule-table"
import { useI18n } from "@/components/providers/i18n-provider"

export default function TeleconsultationPage() {
  const { t } = useI18n()
  
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="mb-6 text-3xl font-bold">{t('Teleconsultation.pageTitle')}</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            {t('Teleconsultation.description')}
          </p>
          <h2 className="text-2xl font-bold">{t('Teleconsultation.howItWorks')}</h2>
          <ol className="list-inside list-decimal text-muted-foreground">
            <li>{t('Teleconsultation.step1')}</li>
            <li>{t('Teleconsultation.step2')}</li>
            <li>{t('Teleconsultation.step3')}</li>
          </ol>
          <h2 className="text-2xl font-bold">{t('Teleconsultation.technicalRequirements')}</h2>
          <ul className="list-inside list-disc text-muted-foreground">
            <li>{t('Teleconsultation.requirement1')}</li>
            <li>{t('Teleconsultation.requirement2')}</li>
            <li>{t('Teleconsultation.requirement3')}</li>
          </ul>
        </div>
        <ScheduleTable />
      </div>
      <div className="mt-8">
        <a className="text-primary hover:underline" href="/appointments">
          {t('Teleconsultation.bookNow')}
        </a>
      </div>
    </div>
  )
}

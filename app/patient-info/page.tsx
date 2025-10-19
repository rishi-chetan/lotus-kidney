"use client"

import faqs from "@/data/faqs.json"
import { FAQAccordion } from "@/components/faq-accordion"
import { siteConfig } from "@/lib/seo-config"
import { FAQSchema, BreadcrumbSchema } from "@/components/structured-data"
import { useI18n } from "@/components/providers/i18n-provider"

export default function PatientInfoPage() {
  const { t } = useI18n();
  return (
    <>
      <FAQSchema faqs={faqs.map(faq => ({ question: faq.question, answer: faq.answer }))} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Patient Information", url: `${siteConfig.url}/patient-info` },
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="mb-6 text-3xl font-bold w-fit">{t('PatientInfo.pageTitle')}</h1>
      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{t('PatientInfo.firstVisitGuide')}</h2>
          <ul className="list-inside list-disc text-muted-foreground">
            <li>{t('PatientInfo.firstVisitItem1')}</li>
            <li>{t('PatientInfo.firstVisitItem2')}</li>
            <li>{t('PatientInfo.firstVisitItem3')}</li>
          </ul>

          <h2 className="text-2xl font-bold">{t('PatientInfo.procedurePreparation')}</h2>
          <p className="text-muted-foreground">
            {t('PatientInfo.procedurePreparationText')}
          </p>

          <h2 className="text-2xl font-bold">{t('PatientInfo.insurancePayment')}</h2>
          <p className="text-muted-foreground">
            {t('PatientInfo.insurancePaymentText')}
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-bold">{t('PatientInfo.faqs')}</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Downloadable Forms - Coming Soon */}
      {/* <section className="mt-12">
        <h2 className="mb-3 text-2xl font-bold">Downloadable Forms</h2>
        <ul className="grid gap-3 md:grid-cols-2">
          {forms.map((f) => (
            <li key={f.id} className="rounded-md border p-4">
              <div className="font-medium">{f.title}</div>
              <a className="text-sm text-primary hover:underline" href={f.url} download>
                Download
              </a>
            </li>
          ))}
        </ul>
      </section> */}
    </div>
    </>
  )
}

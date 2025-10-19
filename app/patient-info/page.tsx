import faqs from "@/data/faqs.json"
// import forms from "@/data/forms.json"
import { FAQAccordion } from "@/components/faq-accordion"
import { Metadata } from "next"
import { siteConfig } from "@/lib/seo-config"
import { FAQSchema, BreadcrumbSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Patient Information | First Visit Guide | Lotus Kidney & Andrology Center",
  description: "Patient resources, FAQs, and first visit guide for Lotus Kidney & Andrology Center. Learn about preparation, insurance, and what to expect during your visit to our urology clinic in Hyderabad.",
  keywords: [
    "patient information urology",
    "first visit urologist",
    "urology FAQs",
    "kidney specialist visit guide",
  ],
  alternates: {
    canonical: `${siteConfig.url}/patient-info`,
  },
}

export default function PatientInfoPage() {
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
      <h1 className="mb-6 text-3xl font-bold w-fit">Patient Resources</h1>
      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">First Visit Guide</h2>
          <ul className="list-inside list-disc text-muted-foreground">
            <li>Arrive 10 minutes early for registration</li>
            <li>Bring previous reports and medication list</li>
            <li>Insurance card and identification</li>
          </ul>

          <h2 className="text-2xl font-bold">Procedure Preparation</h2>
          <p className="text-muted-foreground">
            Follow your doctor’s instructions. For ultrasound or imaging, you may be asked to fast or hydrate
            accordingly.
          </p>

          <h2 className="text-2xl font-bold">Insurance & Payment</h2>
          <p className="text-muted-foreground">
            We accept major insurance providers and offer transparent, upfront pricing for self-pay patients.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-bold">FAQs</h2>
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

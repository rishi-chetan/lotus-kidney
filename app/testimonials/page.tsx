import testimonials from "@/data/testimonials.json"
import { TestimonialCard } from "@/components/testimonial-card"
import { Metadata } from "next"
import { siteConfig } from "@/lib/seo-config"
import { BreadcrumbSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Patient Testimonials | Reviews | Best Urologist in Hyderabad",
  description: "Read patient testimonials and reviews about Dr. Nitesh Battala and Lotus Kidney & Andrology Center. Real experiences from patients treated for kidney stones, prostate problems, male infertility, and more.",
  keywords: [
    "urologist reviews Hyderabad",
    "kidney specialist testimonials",
    "patient reviews urologist",
    "best urologist Hyderabad reviews",
  ],
  alternates: {
    canonical: `${siteConfig.url}/testimonials`,
  },
}

export default function TestimonialsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Patient Testimonials", url: `${siteConfig.url}/testimonials` },
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h1 className="mb-6 text-3xl font-bold">Patient Stories</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>
      </div>
    </>
  )
}

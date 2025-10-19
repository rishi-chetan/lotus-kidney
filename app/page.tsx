import services from "@/data/services.json"
import doctors from "@/data/doctors.json"
import testimonials from "@/data/testimonials.json"
import { Hero } from "@/components/hero"
import { ServiceCard } from "@/components/cards/service-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { ScheduleTable } from "@/components/schedule/schedule-table"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Home | Lotus Kidney & Andrology Center",
}

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground">
              Delivering compassionate, evidence-based kidney, urology, and andrology care with a focus on long-term
              wellbeing.
            </p>
          </div>
          <ScheduleTable />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured Services</h2>
          <Link href="/services" className="text-sm text-primary hover:underline">
            View all
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="mb-6 text-2xl font-bold">What Patients Say</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>
        <div className="mt-6">
          <Button asChild variant="outline">
            <Link href="/testimonials">Read more stories</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

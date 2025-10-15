import testimonials from "@/data/testimonials.json"
import { TestimonialCard } from "@/components/testimonial-card"

export const metadata = {
  title: "Testimonials | Lotus Kidney & Andrology Center",
}

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="mb-6 text-3xl font-bold">Patient Stories</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} t={t} />
        ))}
      </div>
    </div>
  )
}

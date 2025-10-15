import doctors from "@/data/doctors.json"
import { DoctorCard } from "@/components/cards/doctor-card"

export const metadata = {
  title: "About Us | Lotus Kidney & Andrology Center",
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Our Story</h1>
          <p className="text-pretty text-muted-foreground">
            Founded to provide comprehensive kidney, urology, and andrology services under one roof, we combine
            expertise with empathy to deliver the highest standard of care.
          </p>
          <h2 className="text-2xl font-bold">Mission & Values</h2>
          <ul className="list-inside list-disc text-muted-foreground">
            <li>Compassionate, patient-centered care</li>
            <li>Evidence-based medicine and continuous learning</li>
            <li>Accessibility through teleconsultation</li>
          </ul>
        </div>
        <img src="/clinic-interior-calming-design.jpg" alt="Clinic interior" className="rounded-xl border" />
      </div>
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">Doctors</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((d) => (
            <DoctorCard key={d.id} doctor={d} />
          ))}
        </div>
      </section>
    </div>
  )
}

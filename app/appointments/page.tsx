import { AppointmentForm } from "@/components/forms/appointment-form"

export const metadata = {
  title: "Appointments | Lotus Kidney & Andrology Center",
}

export default function AppointmentsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <h1 className="mb-6 text-3xl font-bold">Book an Appointment</h1>
      <p className="mb-6 text-muted-foreground">
        Choose in-clinic or teleconsultation. We’ll confirm availability and share details.
      </p>
      <AppointmentForm />
    </div>
  )
}

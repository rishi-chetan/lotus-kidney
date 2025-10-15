import { ScheduleTable } from "@/components/schedule/schedule-table"

export const metadata = {
  title: "Teleconsultation | Lotus Kidney & Andrology Center",
}

export default function TeleconsultationPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="mb-6 text-3xl font-bold">Teleconsultation</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Connect with our specialists from the comfort of your home. Secure video calls with privacy and care.
          </p>
          <h2 className="text-2xl font-bold">How it works</h2>
          <ol className="list-inside list-decimal text-muted-foreground">
            <li>Book an appointment and choose Teleconsultation</li>
            <li>Receive a secure video link by email/WhatsApp</li>
            <li>Join at your scheduled time</li>
          </ol>
          <h2 className="text-2xl font-bold">Technical requirements</h2>
          <ul className="list-inside list-disc text-muted-foreground">
            <li>Reliable internet connection</li>
            <li>Smartphone or computer with camera</li>
            <li>Quiet, well-lit space</li>
          </ul>
        </div>
        <ScheduleTable />
      </div>
      <div className="mt-8">
        <a className="text-primary hover:underline" href="/appointments">
          Book a teleconsultation →
        </a>
      </div>
    </div>
  )
}

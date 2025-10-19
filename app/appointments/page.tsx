import { AppointmentForm } from "@/components/forms/appointment-form"
import { Metadata } from "next"
import { siteConfig } from "@/lib/seo-config"
import { BreadcrumbSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Book Appointment | Best Urologist in Hyderabad | Dr. Nitesh Battala",
  description: "Schedule consultation with Dr. Nitesh Battala, expert urologist in Hyderabad. Available at Uppal, Medchal, LB Nagar. Call +91 70930 70434 or book online. Teleconsultation and in-clinic appointments available.",
  keywords: [
    "book urologist appointment Hyderabad",
    "urologist consultation Hyderabad",
    "kidney specialist appointment",
    "online urology consultation",
    "urologist appointment near me",
  ],
  alternates: {
    canonical: `${siteConfig.url}/appointments`,
  },
  openGraph: {
    title: "Book Appointment | Lotus Kidney & Andrology Center Hyderabad",
    description: "Schedule your consultation with Dr. Nitesh Battala. Online and in-clinic appointments available.",
    url: `${siteConfig.url}/appointments`,
    images: [siteConfig.ogImage],
  },
}

export default function AppointmentsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Book Appointment", url: `${siteConfig.url}/appointments` },
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <h1 className="mb-6 text-3xl font-bold">Book an Appointment</h1>
        <p className="mb-6 text-muted-foreground">
          Choose in-clinic or teleconsultation. We'll confirm availability and share details.
        </p>
        <AppointmentForm />
      </div>
    </>
  )
}

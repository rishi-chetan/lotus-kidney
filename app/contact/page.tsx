import { ContactForm } from "@/components/forms/contact-form"

export const metadata = {
  title: "Contact Us | Lotus Kidney & Andrology Center",
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Get in touch</h1>
          <ul className="space-y-2 text-sm">
            <li>Address: 123 Lotus Avenue, City</li>
            <li>
              Phone:{" "}
              <a className="text-primary hover:underline" href="tel:+1234567890">
                +1 (234) 567-890
              </a>
            </li>
            <li>
              Email:{" "}
              <a className="text-primary hover:underline" href="mailto:care@lotuskidney.example.com">
                care@lotuskidney.example.com
              </a>
            </li>
            <li>Hours: Mon–Sat 9:00–18:00</li>
            <li>
              WhatsApp:{" "}
              <a
                className="text-primary hover:underline"
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat now
              </a>
            </li>
          </ul>
          <div className="aspect-video overflow-hidden rounded-md border">
            <iframe
              title="Map to Lotus Kidney & Andrology Center"
              src="https://www.google.com/maps?q=New%20York&output=embed"
              className="h-full w-full"
            />
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-bold">Contact Form</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

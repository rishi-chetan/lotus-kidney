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
            <li>
              <strong>Address:</strong>{" "}
              <a 
                className="text-primary hover:underline" 
                href="https://maps.app.goo.gl/1FDGzNzzPgBuaPoF7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Opp. Srinivasa Heights, West Balaji Hill Colony, Sai Nagar, Uppal, Hyderabad, Telangana 500039, India
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a className="text-primary hover:underline" href="tel:+917093070434">
                +91 70930 70434
              </a>
              {", "}
              <a className="text-primary hover:underline" href="tel:+919502926710">
                +91 95029 26710
              </a>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a className="text-primary hover:underline" href="mailto:lkac@gmail.com">
                lkac@gmail.com
              </a>
            </li>
            <li><strong>Hours:</strong> Mon–Sat 9:00–18:00</li>
            <li>
              <strong>WhatsApp:</strong>{" "}
              <a
                className="text-primary hover:underline"
                href="https://wa.me/917093070434"
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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d435.54054368686474!2d78.5645309480481!3d17.41142942521614!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb990b37604b77%3A0x6684fc2a647928c7!2sLotus%20Kidney%20Andrology%20center!5e0!3m2!1sen!2sin!4v1760856124972!5m2!1sen!2sin"
              className="h-full w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
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

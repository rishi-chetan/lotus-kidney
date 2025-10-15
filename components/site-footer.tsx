import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-semibold">
            <span className="inline-block h-6 w-6 rounded-full bg-primary/90" aria-hidden />
            <span>Lotus Kidney & Andrology</span>
          </div>
          <p className="text-sm text-muted-foreground">Compassionate care in nephrology, urology, and andrology.</p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:underline" href="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/appointments">
                Appointments
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/teleconsultation">
                Teleconsultation
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/patient-info">
                Patient Info
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>123 Lotus Avenue, City</li>
            <li>
              <a className="hover:underline" href="tel:+1234567890">
                +1 (234) 567-890
              </a>
            </li>
            <li>
              <a className="hover:underline" href="mailto:care@lotuskidney.example.com">
                care@lotuskidney.example.com
              </a>
            </li>
            <li>Mon–Sat: 9:00–18:00</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:underline" href="/privacy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/terms">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/links">
                Quick Links Page
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Lotus Kidney & Andrology Center</p>
          <p>For emergencies, call local emergency services.</p>
        </div>
      </div>
    </footer>
  )
}

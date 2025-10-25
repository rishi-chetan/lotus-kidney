"use client"

import Link from "next/link"
import { useI18n } from "@/components/providers/i18n-provider"
import { siteConfig } from "@/lib/seo-config"

export function SiteFooter() {
  const { t } = useI18n()
  
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-semibold">
            <img src="/logo.png" alt="Lotus Kidney & Andrology Logo" className="h-8 w-auto" />
            <span>Lotus Kidney & Andrology Center</span>
          </div>
          <p className="text-sm text-muted-foreground">{t('Footer.tagline')}</p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">{t('Footer.quickLinks')}</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:underline" href="/services">
                {t('Footer.services')}
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/appointments">
                {t('Footer.appointments')}
              </Link>
            </li>
            {/* Teleconsultation - Coming Soon */}
            {/* <li>
              <Link className="hover:underline" href="/teleconsultation">
                Teleconsultation
              </Link>
            </li> */}
            <li>
              <Link className="hover:underline" href="/patient-info">
                {t('Footer.patientInfo')}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">{t('Footer.contactInfo')}</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a 
                className="hover:underline" 
                href={siteConfig.links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.contact.address.full}
              </a>
            </li>
            <li>
              <a className="hover:underline" href={`tel:${siteConfig.contact.phone}`}>
                +91 70930 70434
              </a>
              {", "}
              <a className="hover:underline" href={`tel:${siteConfig.contact.phone2}`}>
                +91 95029 26710
              </a>
            </li>
            <li>
              <a className="hover:underline" href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
            </li>
            <li>Mon–Sat: 9:00–18:00</li>
            <li>
              <a
                className="hover:underline"
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Chat
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">{t('Footer.legal')}</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:underline" href="/privacy">
                {t('Footer.privacy')}
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/terms">
                {t('Footer.terms')}
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

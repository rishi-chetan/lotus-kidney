import { ServicesPageClient } from "./services-client"
import { Metadata } from "next"
import { siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: "Our Services | Kidney Stone, Prostate, Male Infertility Treatment in Hyderabad",
  description: "Comprehensive urology services in Hyderabad: kidney stone laser treatment (PCNL, RIRS), prostate care (TURP), male infertility, erectile dysfunction, premature ejaculation, circumcision, pediatric urology, robotic surgery, renal transplant & more. Available in Uppal, Medchal, LB Nagar.",
  keywords: [
    "kidney stone treatment Hyderabad",
    "kidney stone laser treatment",
    "prostate treatment Hyderabad",
    "male infertility specialist Hyderabad",
    "erectile dysfunction doctor",
    "circumcision surgery Hyderabad",
    "pediatric urologist Hyderabad",
    "robotic urology surgery",
    "PCNL surgery Hyderabad",
    "RIRS procedure Hyderabad",
    "TURP surgery Hyderabad",
    "renal transplant Hyderabad",
    "urethral stricture treatment",
    "UTI treatment Hyderabad",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: "Urology Services in Hyderabad | Kidney Stone, Prostate, Male Infertility",
    description: "Expert treatment for kidney stones, prostate problems, male infertility, erectile dysfunction & more in Hyderabad.",
    url: `${siteConfig.url}/services`,
    images: [siteConfig.ogImage],
  },
}

export default function ServicesPage() {
  return <ServicesPageClient />
}

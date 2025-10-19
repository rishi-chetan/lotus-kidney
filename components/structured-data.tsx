import { siteConfig } from '@/lib/seo-config'

export function MedicalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['MedicalBusiness', 'MedicalClinic'],
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: siteConfig.ogImage,
    image: siteConfig.ogImage,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '17.4065',
      longitude: '78.5691',
    },
    openingHoursSpecification: siteConfig.businessHours.schema.map((day) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: day.day,
      opens: day.opens,
      closes: day.closes,
    })),
    priceRange: '$$',
    medicalSpecialty: ['Urology', 'Andrology', 'Nephrology', 'Uro-Oncology'],
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Kidney Stone Treatment',
        description: 'Advanced laser treatment for kidney stones including PCNL, RIRS, and ESWL',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Prostate Treatment',
        description: 'Comprehensive prostate care including BPH treatment and TURP surgery',
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Male Infertility Treatment',
        description: 'Specialized andrology care for male fertility issues',
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Erectile Dysfunction Treatment',
        description: 'Expert treatment for male sexual health concerns',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Robotic Surgery',
        description: 'Minimally invasive robotic urological procedures',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Kidney Transplantation',
        description: 'Comprehensive renal transplantation services',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function DoctorSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: siteConfig.doctor.name,
    jobTitle: siteConfig.doctor.title,
    worksFor: {
      '@type': 'MedicalOrganization',
      name: siteConfig.name,
    },
    medicalSpecialty: [
      'Urology',
      'Andrology',
      'Uro-Oncology',
      'Renal Transplant Surgery',
      'Robotic Surgery',
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'KIMS Hospital, Secunderabad',
      },
    ],
    knowsAbout: [
      'Kidney Stone Treatment',
      'Prostate Care',
      'Male Infertility',
      'Erectile Dysfunction',
      'Robotic Surgery',
      'Renal Transplantation',
      'Reconstructive Urology',
      'Pediatric Urology',
      'Uro-Oncology',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'MBBS',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'MS (General Surgery)',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'DrNB (Urology)',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceSchema({
  name,
  description,
  category,
}: {
  name: string
  description: string
  category: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: name,
    description: description,
    category: category,
    procedureType: 'Therapeutic',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}


"use client"

import doctors from "@/data/doctors.json"
import { siteConfig } from "@/lib/seo-config"
import { BreadcrumbSchema } from "@/components/structured-data"
import { useI18n } from "@/components/providers/i18n-provider"

export default function AboutPage() {
  const { t } = useI18n();
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "About Dr. Nitesh Battala", url: `${siteConfig.url}/about` },
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h1 className="text-4xl font-bold mb-8">{t('About.pageTitle')}</h1>

      <section className="mb-12">
        <div className="space-y-6">
          <div className="flex items-start gap-6">
            <img
              src={doctors[0].photo}
              alt={`Photo of ${doctors[0].name}`}
              className="h-32 w-32 rounded-full border object-cover flex-shrink-0"
            />
            <div className="space-y-3 flex-1">
              <div>
                <h2 className="text-2xl font-semibold">{doctors[0].name}</h2>
                <p className="text-sm text-muted-foreground mt-1">DrNB (Urology), MS (General Surgery), MBBS</p>
                <p className="text-sm font-medium text-foreground mt-2">Consultant Urologist Andrologist, Uro Onchologist, Renal Transplant & Robotic Surgeon</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {doctors[0].specialties.map((specialty) => (
                  <span key={specialty} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-bold mb-4">{t('About.careerObjective')}</h2>
          <p className="text-muted-foreground leading-relaxed">
            {t('About.careerObjectiveText')}
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">{t('About.professionalExperience')}</h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-foreground">DrNB Urology Training</h3>
                <p className="text-sm">KIMS Hospital, Secunderabad (2022-2025)</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-foreground">Assistant Professor - General Surgery</h3>
                <p className="text-sm">CMR Institute of Medical Sciences (2021-2022)</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-foreground">Senior Resident</h3>
                <p className="text-sm">Government General and Chest Hospital, Hyderabad (2020-2021)</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">{t('About.whereToFindMe')}</h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-foreground">Medinova Hospital</h3>
                <p className="text-sm">Medchal</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-foreground">Mediciti Institute of Medical Sciences</h3>
                <p className="text-sm">Ghanpur Village, Medchal</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-foreground">Mediciti Hospital</h3>
                <p className="text-sm">LB Nagar, Nagarjun Sagar Road</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">{t('About.clinicalExpertise')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">{t('About.surgicalExperience')}</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>{t('About.surgicalExperienceItem1')}</li>
                <li>{t('About.surgicalExperienceItem2')}</li>
                <li>{t('About.surgicalExperienceItem3')}</li>
                <li>{t('About.surgicalExperienceItem4')}</li>
                <li>{t('About.surgicalExperienceItem5')}</li>
                <li>{t('About.surgicalExperienceItem6')}</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">{t('About.specializedTraining')}</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>{t('About.specializedTrainingItem1')}</li>
                <li>{t('About.specializedTrainingItem2')}</li>
                <li>{t('About.specializedTrainingItem3')}</li>
                <li>{t('About.specializedTrainingItem4')}</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">{t('About.academicInvolvement')}</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">{t('About.professionalMemberships')}</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>{t('About.membershipItem1')}</li>
                <li>{t('About.membershipItem2')}</li>
                <li>{t('About.membershipItem3')}</li>
                <li>{t('About.membershipItem4')}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">{t('About.researchPublications')}</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>{t('About.researchItem1')}</li>
                <li>{t('About.researchItem2')}</li>
                <li>{t('About.researchItem3')}</li>
                <li>{t('About.researchItem4')}</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-secondary/30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">{t('About.missionValues')}</h2>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-muted-foreground mb-4">
                {t('About.missionText')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>{t('About.valueItem1')}</li>
                <li>{t('About.valueItem2')}</li>
                <li>{t('About.valueItem3')}</li>
                <li>{t('About.valueItem4')}</li>
                <li>{t('About.valueItem5')}</li>
              </ul>
            </div>
            <div>
              <img
                src="/clinic-interior-calming-design.jpg"
                alt="Lotus Kidney & Andrology Center clinic interior"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>
      </div>
      </div>
    </>
  )
}

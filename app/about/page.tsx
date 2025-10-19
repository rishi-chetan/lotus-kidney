import doctors from "@/data/doctors.json"

export const metadata = {
  title: "About Us | Lotus Kidney & Andrology Center",
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="text-4xl font-bold mb-8">About Dr. Battala Nitesh</h1>

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
          <h2 className="text-2xl font-bold mb-4">Career Objective</h2>
          <p className="text-muted-foreground leading-relaxed">
            To establish and grow a patient-centered urology practice that offers advanced, evidence-based treatments 
            with a focus on minimally invasive and robotic surgeries. My goal is to provide compassionate, high-quality 
            care for a wide spectrum of urological conditions while building lasting trust within the community and 
            contributing to improved health outcomes.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
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
            <h2 className="text-2xl font-bold mb-4">Where to Find Me?</h2>
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
          <h2 className="text-2xl font-bold mb-4">Clinical Expertise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Surgical Experience</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>1800+ advanced urological procedures performed</li>
                <li>PCNL, RIRS, URSL procedures</li>
                <li>TURP, TURBT surgeries</li>
                <li>Laparoscopic and open renal surgeries</li>
                <li>Pyeloplasties and urethroplasties</li>
                <li>VVF repairs and reconstructive procedures</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Specialized Training</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Robotic surgery console surgeon certification (Intuitive Surgical)</li>
                <li>Renal transplant team member with extensive exposure</li>
                <li>Urethroplasty techniques including buccal mucosal grafts</li>
                <li>Vascular anastomosis and post-transplant care</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Academic Involvement</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Professional Memberships</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>American Urological Society</li>
                <li>Urological Society of India</li>
                <li>Urological Society of South Zone</li>
                <li>Urological Society of Hyderabad</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Research & Publications</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Multiple paper presentations at national conferences (USICON, SOGUS)</li>
                <li>Published research on renal transplantation techniques</li>
                <li>Poster presentations on rare urological cases</li>
                <li>Active participant in CMEs, conferences, and surgical workshops</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-secondary/30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Our Mission & Values</h2>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-muted-foreground mb-4">
                Founded to provide comprehensive kidney, urology, and andrology services under one roof, we combine
                expertise with empathy to deliver the highest standard of care.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Compassionate, patient-centered care</li>
                <li>Evidence-based medicine and continuous learning</li>
                <li>Advanced minimally invasive and robotic surgical techniques</li>
                <li>Accessibility and convenience for all patients</li>
                <li>Building lasting trust within the community</li>
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
  )
}

"use client"

import { useI18n } from "@/components/providers/i18n-provider"

export default function TermsPage() {
  const { t } = useI18n()
  
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">{t('Terms.pageTitle')}</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* English */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3">Terms & Conditions</h2>
            <p className="text-muted-foreground">
              By using this website, you agree to our terms. Information provided is for educational purposes and is not a
              substitute for professional medical advice.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Appointments</h3>
            <p className="text-muted-foreground">
              Appointment times are subject to confirmation. We will contact you to confirm your appointment details.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Liability</h3>
            <p className="text-muted-foreground">
              We strive for accuracy but make no warranties regarding content completeness. Always consult with a healthcare professional for medical advice.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Privacy</h3>
            <p className="text-muted-foreground">
              Your personal information is protected and will only be used for appointment scheduling and communication purposes.
            </p>
          </div>
        </div>
        
        {/* Telugu */}
        <div className="space-y-6 border-l-2 border-primary/20 pl-8">
          <div>
            <h2 className="text-xl font-semibold mb-3">నిబంధనలు మరియు షరతులు</h2>
            <p className="text-muted-foreground">
              ఈ వెబ్‌సైట్‌ను ఉపయోగించడం ద్వారా, మీరు మా నిబంధనలకు అంగీకరిస్తున్నారు. అందించిన సమాచారం విద్యా ప్రయోజనాల కోసం మాత్రమే మరియు వృత్తిపరమైన వైద్య సలహాకు ప్రత్యామ్నాయం కాదు.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">అపాయింట్‌మెంట్‌లు</h3>
            <p className="text-muted-foreground">
              అపాయింట్‌మెంట్ సమయాలు నిర్ధారణకు లోబడి ఉంటాయి. మీ అపాయింట్‌మెంట్ వివరాలను నిర్ధారించడానికి మేము మిమ్మల్ని సంప్రదిస్తాము.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">బాధ్యత</h3>
            <p className="text-muted-foreground">
              మేము ఖచ్చితత్వం కోసం ప్రయత్నిస్తాము కానీ కంటెంట్ పరిపూర్ణత గురించి ఎటువంటి హామీలు ఇవ్వము. వైద్య సలహా కోసం ఎల్లప్పుడూ ఆరోగ్య సంరక్షణ నిపుణులను సంప్రదించండి.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">గోప్యత</h3>
            <p className="text-muted-foreground">
              మీ వ్యక్తిగత సమాచారం రక్షించబడుతుంది మరియు అపాయింట్‌మెంట్ షెడ్యూలింగ్ మరియు కమ్యూనికేషన్ ప్రయోజనాల కోసం మాత్రమే ఉపయోగించబడుతుంది.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useI18n } from "@/components/providers/i18n-provider"

export default function PrivacyPage() {
  const { t } = useI18n()
  
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">{t('Privacy.pageTitle')}</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* English */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3">Privacy Policy</h2>
            <p className="text-muted-foreground">
              We value your privacy and protect your personal health information. This website collects minimal data required
              for appointments and inquiries.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Data Collection</h3>
            <p className="text-muted-foreground">
              We collect your name, contact information, and details you provide when booking appointments or contacting us. 
              This information is necessary to provide you with quality healthcare services.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Use of Information</h3>
            <p className="text-muted-foreground">
              Information is used exclusively to schedule appointments and provide medical care. We do not sell your data to third parties. 
              Your information is stored securely and is only accessible to authorized medical staff.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Data Security</h3>
            <p className="text-muted-foreground">
              We implement industry-standard security measures to protect your personal information from unauthorized access, 
              disclosure, or misuse.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-muted-foreground">
              For privacy concerns or questions about your data, please email us at lkac@gmail.com or call +91 70930 70434.
            </p>
          </div>
        </div>
        
        {/* Telugu */}
        <div className="space-y-6 border-l-2 border-primary/20 pl-8">
          <div>
            <h2 className="text-xl font-semibold mb-3">గోప్యతా విధానం</h2>
            <p className="text-muted-foreground">
              మేము మీ గోప్యతను విలువైనదిగా భావిస్తాము మరియు మీ వ్యక్తిగత ఆరోగ్య సమాచారాన్ని రక్షిస్తాము. ఈ వెబ్‌సైట్ అపాయింట్‌మెంట్‌లు మరియు విచారణల కోసం అవసరమైన కనీస డేటాను సేకరిస్తుంది.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">డేటా సేకరణ</h3>
            <p className="text-muted-foreground">
              మేము మీ పేరు, సంప్రదింపు సమాచారం మరియు మీరు అపాయింట్‌మెంట్‌లు బుక్ చేసేటప్పుడు లేదా మమ్మల్ని సంప్రదించేటప్పుడు అందించే వివరాలను సేకరిస్తాము. 
              ఈ సమాచారం మీకు నాణ్యమైన ఆరోగ్య సంరక్షణ సేవలను అందించడానికి అవసరం.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">సమాచార వినియోగం</h3>
            <p className="text-muted-foreground">
              సమాచారం కేవలం అపాయింట్‌మెంట్‌లను షెడ్యూల్ చేయడానికి మరియు వైద్య సంరక్షణను అందించడానికి ఉపయోగించబడుతుంది. మేము మీ డేటాను మూడవ పక్షాలకు విక్రయించము. 
              మీ సమాచారం సురక్షితంగా నిల్వ చేయబడుతుంది మరియు అధికారం పొందిన వైద్య సిబ్బందికి మాత్రమే అందుబాటులో ఉంటుంది.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">డేటా భద్రత</h3>
            <p className="text-muted-foreground">
              అనధికార ప్రాప్యత, బహిర్గతం లేదా దుర్వినియోగం నుండి మీ వ్యక్తిగత సమాచారాన్ని రక్షించడానికి మేము పరిశ్రమ-ప్రామాణిక భద్రతా చర్యలను అమలు చేస్తాము.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">సంప్రదించండి</h3>
            <p className="text-muted-foreground">
              గోప్యత ఆందోళనలు లేదా మీ డేటా గురించి ప్రశ్నల కోసం, దయచేసి lkac@gmail.com కు ఇమెయిల్ చేయండి లేదా +91 70930 70434 కు కాల్ చేయండి.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

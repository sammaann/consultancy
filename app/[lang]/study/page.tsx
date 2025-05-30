import { getDictionary } from "@/lib/dictionaries"
import StudySection from "@/components/study-section"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

interface StudyPageProps {
  params: Promise<{ lang: string }>
}

export default async function StudyPage({ params }: StudyPageProps) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen">
      <Navigation dict={dict} currentLang={lang} isStudyPage={true} />
      <div className="pt-20">
        <StudySection dict={dict} />
      </div>
      <Footer dict={dict} isStudyPage={true} />
    </div>
  )
}

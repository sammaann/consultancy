import { getDictionary } from "@/lib/dictionaries"
import ClientWrapper from "@/components/client-wrapper"

interface PageProps {
  params: Promise<{ lang: string }>
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return <ClientWrapper dict={dict} currentLang={lang} />
}

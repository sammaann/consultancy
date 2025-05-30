import { getDictionary } from "@/lib/dictionaries"
import ClientWrapper from "@/components/client-wrapper"

export default async function HomePage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang)

  return <ClientWrapper dict={dict} currentLang={params.lang} />
}

import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Golkahikari Educational Consultancy",
  description: "Expert guidance for Japanese college applications and study visa processing",
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ja" }]
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return children
}

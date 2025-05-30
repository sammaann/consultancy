import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Golkahikari Educational Consultancy",
  description: "Expert guidance for Japanese college applications and study visa processing",
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ja" }]
}

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}

export default async function LangLayout({ children, params }: LayoutProps) {
  // We don't need to await params here since we're just passing children through
  return children
}

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useRouter, usePathname } from "next/navigation"

interface LanguageSwitcherProps {
  currentLang: string
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const switchLanguage = (newLang: string) => {
    if (!mounted) return
    const newPathname = pathname.replace(`/${currentLang}`, `/${newLang}`)
    router.push(newPathname)
  }

  // Always render the same structure to prevent hydration mismatch
  return (
    <div className="flex items-center bg-gray-100 rounded-full p-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => switchLanguage("en")}
        disabled={!mounted}
        className={`h-8 px-3 rounded-full text-sm font-medium transition-all duration-200 ${
          currentLang === "en"
            ? "bg-white text-blue-600 shadow-sm"
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        }`}
      >
        🇺🇸 EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => switchLanguage("ja")}
        disabled={!mounted}
        className={`h-8 px-3 rounded-full text-sm font-medium transition-all duration-200 ${
          currentLang === "ja"
            ? "bg-white text-blue-600 shadow-sm"
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        }`}
      >
        🇯🇵 JP
      </Button>
    </div>
  )
}

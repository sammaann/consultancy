"use client"

import { useState, useEffect } from "react"
import { redirect } from "next/navigation"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contact-section"
import { getDictionary } from "@/lib/dictionaries"

export default function RootPage() {
  redirect("/en")

  const [currentLang, setCurrentLang] = useState<"en" | "ja">("en")
  const [dict, setDict] = useState<any>(null)

  useEffect(() => {
    const loadDictionary = async () => {
      const dictionary = await getDictionary(currentLang)
      setDict(dictionary)
    }
    loadDictionary()
  }, [currentLang])

  if (!dict) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation dict={dict} currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <main>
        <HeroSection dict={dict} />
        <AboutSection dict={dict} />
        <ServicesSection dict={dict} />

        {/* Vision Section */}
        <section id="vision" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">{dict.vision.title}</h2>
            <p className="text-xl text-gray-700 leading-relaxed">{dict.vision.content}</p>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">{dict.mission.title}</h2>
            <p className="text-xl text-gray-700 leading-relaxed">{dict.mission.content}</p>
          </div>
        </section>

        {/* Guarantee Section */}
        <section id="guarantee" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-8">{dict.guarantee.title}</h2>
            <p className="text-xl leading-relaxed">{dict.guarantee.content}</p>
          </div>
        </section>

        <ContactSection dict={dict} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Golkahikari Educational Consultancy</h3>
            <p className="text-gray-400 mb-4">Bridging Dreams Between Nepal and Japan</p>
            <div className="flex justify-center space-x-6">
              <span className="text-gray-400">© 2024 Golkahikari Educational Consultancy. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

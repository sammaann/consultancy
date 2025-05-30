"use client"

import { useState, useEffect } from "react"
import Navigation from "./navigation"
import HeroSection from "./hero-section"
import AboutSection from "./about-section"
import VisionMissionSection from "./vision-mission-section"
import ServicesSection from "./services-section"
import UniversitiesSection from "./universities-section"
import TestimonialsSection from "./testimonials-section"
import SuccessSection from "./success-section"
import LeadershipMessages from "./leadership-messages"
import GallerySection from "./gallery-section"
import ContactSection from "./contact-section"
import Footer from "./footer"
import SearchDialog from "./search-dialog"
import ApplyForm from "./apply-form"

interface ClientWrapperProps {
  dict: any
  currentLang: string
}

export default function ClientWrapper({ dict, currentLang }: ClientWrapperProps) {
  const [mounted, setMounted] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isApplyFormOpen, setIsApplyFormOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Handle search keyboard shortcut
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsSearchOpen(true)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700">Loading...</h2>
          <p className="text-gray-500">Please wait while we prepare your content</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation
        dict={dict}
        currentLang={currentLang}
        onSearchOpen={() => setIsSearchOpen(true)}
        onApplyOpen={() => setIsApplyFormOpen(true)}
      />

      <main>
        <HeroSection dict={dict} onApplyClick={() => setIsApplyFormOpen(true)} />
        <AboutSection dict={dict} />
        <VisionMissionSection dict={dict} />
        <ServicesSection dict={dict} />
        <UniversitiesSection dict={dict} />
        <TestimonialsSection dict={dict} />
        <SuccessSection dict={dict} />
        <LeadershipMessages dict={dict} />
        <GallerySection dict={dict} />

        {/* Guarantee Section */}
        <section id="guarantee" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-8">{dict.guarantee.title}</h2>
            <p className="text-xl leading-relaxed">{dict.guarantee.content}</p>
          </div>
        </section>

        <ContactSection dict={dict} />
      </main>

      <Footer dict={dict} />

      {/* Dialogs */}
      <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} dict={dict} />
      <ApplyForm isOpen={isApplyFormOpen} onClose={() => setIsApplyFormOpen(false)} dict={dict} />
    </div>
  )
}

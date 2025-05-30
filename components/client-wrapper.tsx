"use client"

import { useState, useEffect } from "react"
import Navigation from "./navigation"
import HeroSection from "./hero-section"
import AboutSection from "./about-section"
import FreeConsultationSection from "./free-consultation-section"
import VisionMissionSection from "./vision-mission-section"
import ServicesSection from "./services-section"
import TeamSection from "./team-section"
import WhyChooseUsSection from "./why-choose-us-section"
import GoalsSection from "./goals-section"
import LeadershipMessages from "./leadership-messages"
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
        isStudyPage={false}
      />

      <main>
        <HeroSection dict={dict} onApplyClick={() => setIsApplyFormOpen(true)} />
        <AboutSection dict={dict} />
        <FreeConsultationSection dict={dict} />
        <VisionMissionSection dict={dict} />
        <ServicesSection dict={dict} />
        <TeamSection dict={dict} />
        <WhyChooseUsSection dict={dict} />
        <GoalsSection dict={dict} />
        <LeadershipMessages dict={dict} />

        {/* Enhanced Guarantee Section with Lighter Colors */}
        <section id="guarantee" className="py-20 relative overflow-hidden">
          {/* Lighter Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 to-blue-50/70"></div>

          {/* Subtle Animated Background Elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-200/20 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-indigo-200/20 rounded-full animate-ping"></div>
          <div className="absolute top-32 right-32 w-20 h-20 bg-pink-200/20 rounded-full animate-pulse"></div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {dict.guarantee.title}
              </h2>

              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Promise Content */}
              <div>
                <p className="text-xl md:text-2xl leading-relaxed mb-8 text-gray-700">{dict.guarantee.content}</p>

                {/* Promise Points */}
                <div className="space-y-4">
                  {[
                    "Complete transparency in all processes and communications",
                    "Personalized attention with dedicated counselor assignment",
                    "Honest guidance based on your individual circumstances",
                    "Continuous support from application to arrival in Japan",
                    "Regular updates and progress tracking throughout your journey",
                  ].map((promise, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center shadow-sm">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <p className="ml-3 text-gray-700">{promise}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Promise Visual with Lighter Colors */}
              <div className="relative">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-blue-200 shadow-xl">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Commitment Metrics</h3>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-4 border border-blue-300">
                        <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                        <div className="text-sm text-blue-700">Transparency</div>
                      </div>
                      <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-4 border border-green-300">
                        <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                        <div className="text-sm text-green-700">Support</div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-4 border border-purple-300">
                        <div className="text-3xl font-bold text-purple-600 mb-2">1:1</div>
                        <div className="text-sm text-purple-700">Attention</div>
                      </div>
                      <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-4 border border-orange-300">
                        <div className="text-3xl font-bold text-orange-600 mb-2">∞</div>
                        <div className="text-sm text-orange-700">Dedication</div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl border border-yellow-300">
                      <p className="text-sm font-semibold text-gray-700">
                        "Your success is our reputation. We stake our future on your achievements."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA with Lighter Design */}
            <div className="mt-16 text-center">
              <div className="inline-block bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-blue-200 shadow-lg">
                <p className="text-lg font-semibold mb-2 text-gray-800">Ready to Begin Your Journey?</p>
                <p className="text-sm text-gray-600 mb-4">
                  Join the founding students of Golkahikari and be part of our success story
                </p>
                <button
                  onClick={() => setIsApplyFormOpen(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Application
                </button>
              </div>
            </div>
          </div>
        </section>

        <ContactSection dict={dict} />
      </main>

      <Footer dict={dict} isStudyPage={false} />

      {/* Dialogs */}
      <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} dict={dict} />
      <ApplyForm isOpen={isApplyFormOpen} onClose={() => setIsApplyFormOpen(false)} dict={dict} />
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap } from "lucide-react"
import AnimatedSection from "./animated-section"

interface HeroSectionProps {
  dict: any
  onApplyClick?: () => void
}

export default function HeroSection({ dict, onApplyClick }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-ping"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <AnimatedSection animation="fadeIn">
          <div className="mb-8">
            <GraduationCap className="w-20 h-20 mx-auto mb-4 text-yellow-400" />
            <h2 className="text-2xl md:text-3xl font-light mb-2 text-yellow-400">{dict.hero.subtitle}</h2>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={300}>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            {dict.hero.title}
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={600}>
          <p className="text-xl md:text-2xl mb-4 text-blue-200 font-light">{dict.hero.motto}</p>
          <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">{dict.hero.description}</p>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={900}>
          <Button
            onClick={onApplyClick}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 group"
          >
            {dict.hero.cta}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}

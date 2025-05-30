"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Download, FileText, Video, Headphones, Clock, Star, Users, ChevronRight } from "lucide-react"
import AnimatedSection from "./animated-section"

interface StudySectionProps {
  dict: any
}

export default function StudySection({ dict }: StudySectionProps) {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Materials", icon: BookOpen },
    { id: "jlpt", name: "JLPT Prep", icon: FileText },
    { id: "visa", name: "Visa Guide", icon: FileText },
    { id: "language", name: "Basic Japanese", icon: Headphones },
  ]

  // Simplified to only the most essential materials for Nepali students going to Japan
  const studyMaterials = [
    {
      id: 1,
      title: "JLPT N5 Complete Guide",
      description:
        "Essential Japanese language proficiency test preparation for beginners. Required for most Japanese institutions.",
      category: "jlpt",
      type: "PDF + Audio",
      level: "Beginner",
      duration: "2-3 months",
      downloads: 2850,
      rating: 4.9,
      icon: FileText,
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "500+ essential vocabulary words",
        "Basic grammar patterns with examples",
        "Practice tests with audio",
        "Hiragana & Katakana charts",
      ],
    },
    {
      id: 2,
      title: "JLPT N4 Advanced Prep",
      description:
        "Intermediate level Japanese preparation. Essential for university applications and better job opportunities in Japan.",
      category: "jlpt",
      type: "PDF + Audio + Video",
      level: "Elementary",
      duration: "3-4 months",
      downloads: 1980,
      rating: 4.8,
      icon: Headphones,
      gradient: "from-purple-500 to-pink-500",
      features: [
        "800+ vocabulary with audio pronunciation",
        "Complex grammar patterns",
        "Listening comprehension exercises",
        "Mock examination papers",
      ],
    },
    {
      id: 3,
      title: "Student Visa Application Guide",
      description:
        "Complete step-by-step guide for Japanese student visa application specifically for Nepali students.",
      category: "visa",
      type: "Comprehensive PDF",
      level: "All Levels",
      duration: "Reference Guide",
      downloads: 3200,
      rating: 4.9,
      icon: FileText,
      gradient: "from-green-500 to-teal-500",
      features: [
        "Required documents checklist",
        "Application timeline and deadlines",
        "Interview preparation tips",
        "Common mistakes to avoid",
      ],
    },
    {
      id: 4,
      title: "Basic Japanese for Beginners",
      description:
        "Fundamental Japanese language course with video lessons. Perfect starting point for complete beginners.",
      category: "language",
      type: "Video + PDF + Audio",
      level: "Absolute Beginner",
      duration: "1-2 months",
      downloads: 2650,
      rating: 4.7,
      icon: Video,
      gradient: "from-orange-500 to-red-500",
      features: [
        "Hiragana & Katakana mastery",
        "Essential daily conversations",
        "Video pronunciation guides",
        "Interactive practice exercises",
      ],
    },
  ]

  const filteredMaterials =
    activeCategory === "all"
      ? studyMaterials
      : studyMaterials.filter((material) => material.category === activeCategory)

  return (
    <section id="study" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Essential Study Materials</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Carefully curated essential resources for Nepali students preparing for Japanese education
            </p>
          </div>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection animation="slideUp" delay={200}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
        </AnimatedSection>

        {/* Study Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredMaterials.map((material, index) => (
            <AnimatedSection key={material.id} animation="slideUp" delay={index * 150}>
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 overflow-hidden h-full">
                <div className={`h-2 bg-gradient-to-r ${material.gradient}`}></div>
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${material.gradient} flex items-center justify-center`}
                    >
                      <material.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs font-semibold">
                      {material.type}
                    </Badge>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {material.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{material.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {material.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <ChevronRight className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 pt-4 border-t border-gray-100">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Clock className="w-4 h-4 text-gray-400 mr-1" />
                      </div>
                      <span className="text-xs font-semibold text-gray-700">{material.duration}</span>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      </div>
                      <span className="text-xs font-semibold text-gray-700">{material.rating}</span>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Download className="w-4 h-4 text-gray-400 mr-1" />
                      </div>
                      <span className="text-xs font-semibold text-gray-700">{material.downloads.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Level Badge */}
                  <div className="flex items-center justify-center mb-6">
                    <Badge
                      variant="outline"
                      className={`bg-gradient-to-r ${material.gradient} bg-clip-text text-transparent border-current font-semibold`}
                    >
                      {material.level}
                    </Badge>
                  </div>

                  {/* Download Button */}
                  <Button
                    className={`w-full bg-gradient-to-r ${material.gradient} hover:shadow-lg transition-all duration-300 group-hover:scale-105 text-white font-semibold py-3`}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Now
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Why These Materials */}
        <AnimatedSection animation="fadeIn" delay={600}>
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Why These 4 Essential Materials?</h3>
            <p className="text-lg mb-6 opacity-90">
              Based on extensive research and feedback from successful Nepali students in Japan
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <FileText className="w-8 h-8 mx-auto mb-2" />
                <h4 className="font-semibold mb-1">JLPT N5/N4</h4>
                <p className="text-sm opacity-80">Required by 95% of Japanese institutions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <FileText className="w-8 h-8 mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Visa Guide</h4>
                <p className="text-sm opacity-80">Essential for successful visa application</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Video className="w-8 h-8 mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Basic Japanese</h4>
                <p className="text-sm opacity-80">Foundation for daily life in Japan</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Proven Success</h4>
                <p className="text-sm opacity-80">Used by 1000+ successful students</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

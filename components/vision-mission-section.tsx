"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Target, ArrowRight, CheckCircle } from 'lucide-react'
import AnimatedSection from "./animated-section"

interface VisionMissionSectionProps {
  dict: any
}

export default function VisionMissionSection({ dict }: VisionMissionSectionProps) {
  // Vision key points
  const visionPoints = [
    "Building trust between Nepali students and Japanese institutions",
    "Creating personalized educational pathways for each student",
    "Establishing new standards in educational consultancy",
    "Fostering cultural exchange and academic excellence"
  ]

  // Mission key points
  const missionPoints = [
    "Providing exceptional guidance with transparency",
    "Maintaining highest ethical standards in all practices",
    "Supporting students throughout their educational journey",
    "Building Nepal's most reliable Japanese education consultancy"
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision Section */}
        <div id="vision" className="mb-20">
          <AnimatedSection animation="fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{dict.vision.title}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="/placeholder.svg?height=500&width=500"
                    alt="Vision"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-6 shadow-xl">
                  <Lightbulb className="w-12 h-12 text-blue-600" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <div>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">{dict.vision.content}</p>
                
                <div className="space-y-4">
                  {visionPoints.map((point, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <p className="ml-3 text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
                  <p className="text-blue-800 font-semibold italic">
                    "Our vision is to become the bridge that transforms educational dreams into reality."
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Mission Section */}
        <div id="mission" className="pt-12">
          <AnimatedSection animation="fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{dict.mission.title}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft" className="order-2 lg:order-1">
              <div>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">{dict.mission.content}</p>
                
                <div className="space-y-4">
                  {missionPoints.map((point, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <ArrowRight className="w-5 h-5 text-purple-600" />
                      </div>
                      <p className="ml-3 text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-purple-50 border-l-4 border-purple-600 rounded-r-lg">
                  <p className="text-purple-800 font-semibold italic">
                    "Our mission is to provide exceptional guidance with unwavering dedication to each student's success."
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight" className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="/placeholder.svg?height=500&width=500"
                    alt="Mission"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-bounce"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-6 shadow-xl">
                  <Target className="w-12 h-12 text-purple-600" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

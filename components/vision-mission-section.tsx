"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Target, ArrowRight } from 'lucide-react'
import AnimatedSection from "./animated-section"
import { Button } from "@/components/ui/button"

interface VisionMissionSectionProps {
  dict: any
}

export default function VisionMissionSection({ dict }: VisionMissionSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-20 translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Vision & Mission</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              We are dedicated to creating educational bridges between Nepal and Japan, fostering cultural exchange and academic excellence.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision Card */}
          <AnimatedSection animation="slideLeft">
            <Card className="overflow-hidden border-0 shadow-xl transition-all duration-500 h-full hover:shadow-2xl hover:-translate-y-1 group">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <Lightbulb className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{dict.vision.title}</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To become the premier educational bridge connecting Nepalese students with Japanese institutions, fostering a generation of global citizens equipped with cross-cultural understanding and academic excellence.
                  </p>
                  
                  <div className="pl-6 border-l-4 border-blue-500 py-2">
                    <h3 className="font-bold text-blue-700 mb-1">Our Long-term Vision</h3>
                    <p className="text-gray-600">
                      Creating lasting connections between Nepal and Japan through education, cultural exchange, and professional development.
                    </p>
                  </div>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ArrowRight className="w-3 h-3 text-blue-600" />
                      </div>
                      <span>Establishing Nepal as a key source of talented students for Japanese universities</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ArrowRight className="w-3 h-3 text-blue-600" />
                      </div>
                      <span>Building a network of alumni who contribute to both Nepalese and Japanese societies</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ArrowRight className="w-3 h-3 text-blue-600" />
                      </div>
                      <span>Promoting Japanese language and culture throughout Nepal</span>
                    </li>
                  </ul>
                </div>
                
                <Button variant="ghost" className="mt-6 text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto">
                  Learn more about our vision
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Mission Card */}
          <AnimatedSection animation="slideRight">
            <Card className="overflow-hidden border-0 shadow-xl transition-all duration-500 h-full hover:shadow-2xl hover:-translate-y-1 group">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mr-4 group-hover:bg-purple-600 transition-colors duration-300">
                    <Target className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{dict.mission.title}</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To provide comprehensive, personalized guidance to Nepalese students seeking quality education in Japan, ensuring successful visa processing and a smooth transition to Japanese academic life.
                  </p>
                  
                  <div className="pl-6 border-l-4 border-purple-500 py-2">
                    <h3 className="font-bold text-purple-700 mb-1">Our Commitment</h3>
                    <p className="text-gray-600">
                      Delivering excellence in educational consultancy with integrity, transparency, and student-centered service.
                    </p>
                  </div>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ArrowRight className="w-3 h-3 text-purple-600" />
                      </div>
                      <span>Providing expert guidance on university selection and application processes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ArrowRight className="w-3 h-3 text-purple-600" />
                      </div>
                      <span>Offering comprehensive Japanese language preparation programs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ArrowRight className="w-3 h-3 text-purple-600" />
                      </div>
                      <span>Ensuring seamless visa application and pre-departure support</span>
                    </li>
                  </ul>
                </div>
                
                <Button variant="ghost" className="mt-6 text-purple-600 hover:text-purple-700 hover:bg-purple-50 p-0 h-auto">
                  Learn more about our mission
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, User, Star, Heart, Target, Lightbulb } from "lucide-react"
import AnimatedSection from "./animated-section"

interface LeadershipMessagesProps {
  dict: any
}

export default function LeadershipMessages({ dict }: LeadershipMessagesProps) {
  return (
    <section id="leadership" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Messages</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Principal's Message */}
          <AnimatedSection animation="slideLeft">
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className="relative mr-6 flex-shrink-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-100">
                      <img
                        src="/placeholder.svg?height=80&width=80"
                        alt="Principal"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-2">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Principal's Message</h3>
                    <p className="text-blue-600 font-semibold">Dr. Ram Prasad Sharma</p>
                    <p className="text-gray-500 text-sm">Principal & Founder</p>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" />
                  <blockquote className="text-gray-700 leading-relaxed pl-6">
                    "Starting Golkahikari Educational Consultancy represents the culmination of my years of experience
                    in international education. We begin this journey with a clear vision: to provide unparalleled
                    support to Nepali students aspiring to study in Japan. As a new consultancy, we bring fresh energy,
                    personalized attention, and a commitment to excellence that will set new standards in educational
                    guidance. Every student who trusts us with their dreams becomes part of our founding story."
                  </blockquote>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-600">
                    <strong>Experience:</strong> 15+ years in international education
                    <br />
                    <strong>Education:</strong> PhD in International Education, Tokyo University
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Managing Director's Message */}
          <AnimatedSection animation="slideRight">
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className="relative mr-6 flex-shrink-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-purple-100">
                      <img
                        src="/placeholder.svg?height=80&width=80"
                        alt="Managing Director"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-purple-600 rounded-full p-2">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Managing Director's Message</h3>
                    <p className="text-purple-600 font-semibold">Ms. Sita Devi Thapa</p>
                    <p className="text-gray-500 text-sm">Managing Director & Co-Founder</p>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-purple-200" />
                  <blockquote className="text-gray-700 leading-relaxed pl-6">
                    "Launching Golkahikari is an exciting opportunity to revolutionize educational consultancy in Nepal.
                    We start with the advantage of modern technology, current market knowledge, and a deep understanding
                    of what students truly need. Our fresh approach means we can adapt quickly, provide innovative
                    solutions, and build genuine relationships with each student. We're not just starting a business;
                    we're beginning a mission to transform lives through education."
                  </blockquote>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-600">
                    <strong>Experience:</strong> 12+ years in international business & education
                    <br />
                    <strong>Education:</strong> MBA in International Business, Waseda University
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Enhanced Founding Vision Statement with Lighter Colors */}
        <AnimatedSection animation="fadeIn" delay={400}>
          <div className="mt-20 relative overflow-hidden">
            {/* Lighter Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100 rounded-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent rounded-3xl"></div>

            {/* Subtle Floating Elements */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-blue-200/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 bg-purple-200/30 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 right-16 w-8 h-8 bg-indigo-200/30 rounded-full animate-ping"></div>

            <div className="relative z-10 p-12 text-center">
              <div className="max-w-4xl mx-auto">
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-4 shadow-lg">
                    <Lightbulb className="w-12 h-12 text-white" />
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Our Founding Vision
                </h3>

                <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-700">
                  "Together, we embark on this journey to create something meaningful and lasting. Golkahikari
                  represents our shared commitment to excellence, innovation, and the belief that every student deserves
                  personalized guidance to achieve their dreams."
                </p>

                {/* Vision Pillars with Lighter Colors */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="bg-gradient-to-r from-pink-400 to-rose-400 rounded-full p-3 w-fit mx-auto mb-3">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-gray-800">Passion</h4>
                    <p className="text-sm text-gray-600">
                      Driven by genuine care for each student's success and future
                    </p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-400 rounded-full p-3 w-fit mx-auto mb-3">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-gray-800">Purpose</h4>
                    <p className="text-sm text-gray-600">
                      Creating pathways to Japanese education with precision and dedication
                    </p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-indigo-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-3 w-fit mx-auto mb-3">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-gray-800">Promise</h4>
                    <p className="text-sm text-gray-600">
                      Delivering excellence through transparency, integrity, and innovation
                    </p>
                  </div>
                </div>

                {/* Call to Action with Lighter Design */}
                <div className="mt-10 p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-blue-200 shadow-lg">
                  <p className="text-lg font-semibold mb-2 text-gray-800">Join Our Founding Journey</p>
                  <p className="text-sm text-gray-600">
                    Be part of our story as we build Nepal's most trusted educational consultancy for Japanese studies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

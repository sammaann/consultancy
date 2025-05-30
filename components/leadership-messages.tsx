"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, User } from 'lucide-react'
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
                    "Education is the bridge that connects dreams to reality. At Golkahikari, we don't just process applications; we nurture aspirations and guide young minds toward their destined path in Japan. Every student who walks through our doors carries the hopes of their family and the potential to contribute to both Nepal and Japan's future. Our commitment extends beyond visa approval – we ensure each student is prepared for the cultural, academic, and personal journey ahead."
                  </blockquote>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-600">
                    <strong>Experience:</strong> 15+ years in educational consultancy<br />
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
                    <p className="text-gray-500 text-sm">Managing Director</p>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-purple-200" />
                  <blockquote className="text-gray-700 leading-relaxed pl-6">
                    "Innovation and excellence drive everything we do at Golkahikari. In today's rapidly evolving educational landscape, we continuously adapt our services to meet the changing needs of students and institutions. Our success is measured not just by the number of visas approved, but by the lasting impact our students make in their chosen fields. We are proud to be the catalyst that transforms ambitious Nepali students into global citizens and future leaders."
                  </blockquote>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-600">
                    <strong>Experience:</strong> 12+ years in international education<br />
                    <strong>Education:</strong> MBA in International Business, Waseda University
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Combined Vision Statement */}
        <AnimatedSection animation="fadeIn" delay={400}>
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Our Shared Commitment</h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              "Together, we envision a future where geographical boundaries don't limit educational aspirations. 
              Golkahikari stands as a testament to the power of dedicated guidance, cultural understanding, and 
              unwavering support in transforming dreams into achievements."
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

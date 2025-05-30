"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, GraduationCap, Users } from "lucide-react"
import AnimatedSection from "./animated-section"

interface SuccessSectionProps {
  dict: any
}

export default function SuccessSection({ dict }: SuccessSectionProps) {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Students Placed",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: GraduationCap,
      value: "50+",
      label: "Partner Universities",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      value: "95%",
      label: "Visa Success Rate",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: BookOpen,
      value: "10+",
      label: "Years Experience",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="success" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Success</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Our track record speaks for itself. We've helped hundreds of students achieve their dreams of studying in
              Japan.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} animation="slideUp" delay={index * 200}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${stat.gradient}`}></div>
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${stat.gradient} flex items-center justify-center`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fadeIn" delay={400}>
          <div className="mt-16 bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Partnerships</h3>
                <p className="text-gray-600 mb-6">
                  We have established strong relationships with top Japanese universities and language schools, ensuring
                  our students have access to quality education.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-gray-100 p-4 rounded-lg flex items-center justify-center">
                      <img
                        src={`/placeholder.svg?height=60&width=120`}
                        alt={`Partner ${i}`}
                        className="max-h-12 opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-4">Recognition & Achievements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Award className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                    <span>Recognized as Top Educational Consultancy 2023</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                    <span>Certified by Japanese Education Ministry</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                    <span>Excellence in Student Placement Award</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                    <span>Highest Visa Success Rate Among Consultancies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, TrendingUp } from "lucide-react"
import AnimatedSection from "./animated-section"

interface AboutSectionProps {
  dict: any
}

export default function AboutSection({ dict }: AboutSectionProps) {
  const stats = [
    {
      icon: Calendar,
      label: dict.about.established,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      label: dict.about.students,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      label: dict.about.success,
      gradient: "from-green-500 to-teal-500",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slideLeft">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{dict.about.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">{dict.about.content}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <CardContent className="p-6">
                      <div
                        className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.gradient} flex items-center justify-center`}
                      >
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-sm font-semibold text-gray-700">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideRight">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/placeholder.svg?height=500&width=500"
                  alt="Golkahikari Office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

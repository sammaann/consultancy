"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, BookOpen, GraduationCap, Users } from "lucide-react"
import AnimatedSection from "./animated-section"

interface GoalsSectionProps {
  dict: any
}

export default function GoalsSection({ dict }: GoalsSectionProps) {
  const goals = [
    {
      icon: Users,
      title: "Student Success",
      description: "Our primary goal is to ensure every student achieves their dream of studying in Japan",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: GraduationCap,
      title: "Quality Partnerships",
      description: "Building relationships with top Japanese universities and language schools",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      title: "High Success Rate",
      description: "Aiming for excellent visa approval rates through meticulous preparation",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Support",
      description: "Providing end-to-end guidance from application to arrival in Japan",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="success" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{dict.success.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and the goals we strive to achieve for every student
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {goals.map((goal, index) => (
            <AnimatedSection key={index} animation="slideUp" delay={index * 200}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden h-full">
                <div className={`h-2 bg-gradient-to-r ${goal.gradient}`}></div>
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${goal.gradient} flex items-center justify-center`}
                  >
                    <goal.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{goal.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{goal.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fadeIn" delay={400}>
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Our Founding Promise</h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              "We are committed to establishing Golkahikari as Nepal's most trusted name in Japanese education
              consultancy. Every student we serve helps us build our reputation, and every success story becomes part of
              our growing legacy."
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

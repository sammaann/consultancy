"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Users, Clock } from "lucide-react"
import AnimatedSection from "./animated-section"

interface WhyChooseUsSectionProps {
  dict: any
}

export default function WhyChooseUsSection({ dict }: WhyChooseUsSectionProps) {
  const reasons = [
    {
      icon: Heart,
      title: "Personalized Attention",
      description:
        "As a new consultancy, we provide individual attention to each student with dedicated support throughout your journey.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Experienced Leadership",
      description: "Founded by professionals with extensive experience in Japanese education and visa processing.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Small Student Groups",
      description:
        "We maintain small student groups to ensure quality guidance and personal mentorship for better outcomes.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Clock,
      title: "Modern Approach",
      description: "Fresh perspective with up-to-date knowledge of current Japanese education trends and requirements.",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{dict.testimonials.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Discover what makes Golkahikari the right choice for your Japanese education journey
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <AnimatedSection key={index} animation="slideUp" delay={index * 200}>
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 overflow-hidden h-full">
                <CardContent className="p-8 text-center relative">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${reason.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

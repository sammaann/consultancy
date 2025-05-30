"use client"

import { Card, CardContent } from "@/components/ui/card"
import { FileText, Users, GraduationCap, Languages } from "lucide-react"
import AnimatedSection from "./animated-section"

interface ServicesSectionProps {
  dict: any
}

export default function ServicesSection({ dict }: ServicesSectionProps) {
  const services = [
    {
      icon: FileText,
      title: dict.services.visa.title,
      description: dict.services.visa.description,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: dict.services.counseling.title,
      description: dict.services.counseling.description,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: GraduationCap,
      title: dict.services.application.title,
      description: dict.services.application.description,
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Languages,
      title: dict.services.language.title,
      description: dict.services.language.description,
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{dict.services.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="slideUp" delay={index * 200}>
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 overflow-hidden">
                <CardContent className="p-8 text-center relative">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
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

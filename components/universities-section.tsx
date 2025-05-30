"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from 'lucide-react'
import AnimatedSection from "./animated-section"

interface UniversitiesSectionProps {
  dict: any
}

export default function UniversitiesSection({ dict }: UniversitiesSectionProps) {
  // Sample partner universities - in a real app, this would come from a CMS or API
  const universities = [
    {
      id: 1,
      name: "University of Tokyo",
      location: "Tokyo, Japan",
      type: "National University",
      specialties: ["Engineering", "Medicine", "Science"],
      logo: "https://www.u-tokyo.ac.jp/content/400235960.png",
      ranking: "#1 in Japan",
    },
    {
      id: 2,
      name: "Kyoto University",
      location: "Kyoto, Japan",
      type: "National University",
      specialties: ["Research", "Liberal Arts", "Science"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Kyoto_University_emblem.svg/2048px-Kyoto_University_emblem.svg.png",
      ranking: "#2 in Japan",
    },
    {
      id: 3,
      name: "Waseda University",
      location: "Tokyo, Japan",
      type: "Private University",
      specialties: ["Business", "International Studies", "Engineering"],
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Waseda_University_Logo.svg/1200px-Waseda_University_Logo.svg.png",
      ranking: "Top Private University",
    },
    {
      id: 4,
      name: "Osaka University",
      location: "Osaka, Japan",
      type: "National University",
      specialties: ["Medicine", "Engineering", "Economics"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/Osaka_University_logo.svg",
      ranking: "#3 in Japan",
    },
  ]

  return (
    <section id="universities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partner Universities</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              We have established partnerships with top Japanese universities to provide our students with the best educational opportunities.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {universities.map((university, index) => (
            <AnimatedSection key={university.id} animation="slideUp" delay={index * 200}>
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 overflow-hidden h-full">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-24 h-16 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                      <img
                        src={university.logo || "/placeholder.svg"}
                        alt={`${university.name} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-2">
                      {university.ranking}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {university.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-2">{university.location}</p>
                  <p className="text-sm text-gray-500 mb-4">{university.type}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {university.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-center pt-4 border-t border-gray-100">
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    <span className="ml-2 text-sm text-gray-500 group-hover:text-blue-600 transition-colors">
                      Learn More
                    </span>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fadeIn" delay={600}>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              And many more prestigious institutions across Japan
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-20 h-12 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-500">Partner {i + 4}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

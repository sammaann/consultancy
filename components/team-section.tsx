"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Linkedin, GraduationCap } from "lucide-react"
import AnimatedSection from "./animated-section"

interface TeamSectionProps {
  dict: any
}

export default function TeamSection({ dict }: TeamSectionProps) {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Ram Prasad Sharma",
      role: "Principal & Founder",
      education: "PhD in International Education, Tokyo University",
      experience: "15+ years in Educational Consultancy",
      specialization: "Japanese Education Systems, Visa Processing",
      image: "/placeholder.svg?height=300&width=300",
      email: "principal@golkahikari.com",
      phone: "+977-1-XXXXXXX",
      description:
        "Leading expert in Japanese education with extensive experience in student placement and visa processing.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "Ms. Sita Devi Thapa",
      role: "Managing Director & Co-Founder",
      education: "MBA in International Business, Waseda University",
      experience: "12+ years in International Business",
      specialization: "Student Counseling, University Relations",
      image: "/placeholder.svg?height=300&width=300",
      email: "md@golkahikari.com",
      phone: "+977-1-XXXXXXX",
      description:
        "Expert in international business relations and student counseling with deep knowledge of Japanese culture.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "Mr. Arjun Gurung",
      role: "Senior Counselor",
      education: "Master's in Education, Kyoto University",
      experience: "8+ years in Student Guidance",
      specialization: "Application Processing, Language Training",
      image: "/placeholder.svg?height=300&width=300",
      email: "arjun@golkahikari.com",
      phone: "+977-1-XXXXXXX",
      description: "Dedicated counselor specializing in application processing and Japanese language preparation.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      id: 4,
      name: "Ms. Priya Maharjan",
      role: "Documentation Specialist",
      education: "Bachelor's in International Relations, Sophia University",
      experience: "6+ years in Documentation",
      specialization: "Visa Documentation, Legal Compliance",
      image: "/placeholder.svg?height=300&width=300",
      email: "priya@golkahikari.com",
      phone: "+977-1-XXXXXXX",
      description:
        "Meticulous documentation specialist ensuring all paperwork meets Japanese immigration requirements.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      name: "Mr. Bikash Tamang",
      role: "Student Relations Officer",
      education: "Bachelor's in Japanese Studies, Tribhuvan University",
      experience: "4+ years in Student Support",
      specialization: "Student Support, Cultural Orientation",
      image: "/placeholder.svg?height=300&width=300",
      email: "bikash@golkahikari.com",
      phone: "+977-1-XXXXXXX",
      description: "Passionate about helping students adapt to Japanese culture and academic environment.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      id: 6,
      name: "Ms. Sunita Rai",
      role: "Administrative Coordinator",
      education: "Bachelor's in Business Administration, Kathmandu University",
      experience: "5+ years in Administration",
      specialization: "Operations Management, Client Relations",
      image: "/placeholder.svg?height=300&width=300",
      email: "sunita@golkahikari.com",
      phone: "+977-1-XXXXXXX",
      description: "Ensures smooth operations and maintains excellent relationships with students and their families.",
      gradient: "from-pink-500 to-rose-500",
    },
  ]

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{dict.team.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">{dict.team.subtitle}</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={member.id} animation="slideUp" delay={index * 150}>
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 overflow-hidden h-full">
                <div className={`h-2 bg-gradient-to-r ${member.gradient}`}></div>
                <CardContent className="p-0">
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Contact Icons Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors cursor-pointer">
                        <Mail className="w-4 h-4 text-gray-700" />
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors cursor-pointer">
                        <Phone className="w-4 h-4 text-gray-700" />
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors cursor-pointer">
                        <Linkedin className="w-4 h-4 text-gray-700" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {member.name}
                      </h3>
                      <p
                        className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}
                      >
                        {member.role}
                      </p>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">{member.description}</p>

                    {/* Education & Experience */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start">
                        <GraduationCap className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-gray-600">{member.education}</span>
                      </div>
                      <div className="text-xs text-gray-500 ml-6">
                        <strong>Experience:</strong> {member.experience}
                      </div>
                      <div className="text-xs text-gray-500 ml-6">
                        <strong>Specialization:</strong> {member.specialization}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="flex items-center">
                          <Mail className="w-3 h-3 mr-1" />
                          Contact
                        </span>
                        <span className="flex items-center">
                          <Phone className="w-3 h-3 mr-1" />
                          Available
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Team Values Section */}
        <AnimatedSection animation="fadeIn" delay={600}>
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Our Team Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <h4 className="font-semibold mb-2">Dedication</h4>
                <p className="text-sm opacity-90">Committed to each student's success and dreams</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Expertise</h4>
                <p className="text-sm opacity-90">Deep knowledge of Japanese education systems</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Integrity</h4>
                <p className="text-sm opacity-90">Honest guidance and transparent processes</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

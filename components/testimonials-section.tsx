"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedSection from "./animated-section"

interface TestimonialsProps {
  dict: any
}

export default function TestimonialsSection({ dict }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Sample testimonials - in a real app, these would come from a CMS or API
  const testimonials = [
    {
      id: 1,
      name: "Raj Sharma",
      role: "Student at Tokyo University",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Golkahikari helped me navigate the complex process of applying to Japanese universities. Their guidance was invaluable in securing my admission and visa.",
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Language Student in Osaka",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The language preparation program at Golkahikari was excellent. I passed JLPT N2 and was accepted into my dream language school in Japan.",
    },
    {
      id: 3,
      name: "Anish Thapa",
      role: "Engineering Student at Kyoto University",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "From application to visa processing, Golkahikari made my journey to Japan smooth and stress-free. I highly recommend their services.",
    },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Auto-rotate testimonials only after component is mounted
  useEffect(() => {
    if (!mounted) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)
    return () => clearInterval(interval)
  }, [mounted])

  if (!mounted) {
    return (
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Voice</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Voice</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
        </AnimatedSection>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className={`flex transition-transform duration-500 ease-in-out ${isAnimating ? "opacity-50" : "opacity-100"}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-100">
                              <img
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2">
                              <Quote className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow text-center md:text-left">
                          <p className="text-lg text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                          <div>
                            <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full hover:bg-blue-50 hover:text-blue-600"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="sr-only">Previous</span>
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full p-0 min-w-0 ${currentIndex === index ? "bg-blue-600" : "bg-gray-300"}`}
              >
                <span className="sr-only">Testimonial {index + 1}</span>
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full hover:bg-blue-50 hover:text-blue-600"
            >
              <ChevronRight className="w-5 h-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

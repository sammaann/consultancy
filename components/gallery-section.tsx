"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import AnimatedSection from "./animated-section"

interface GallerySectionProps {
  dict: any
}

export default function GallerySection({ dict }: GallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  // Sample gallery images - in a real app, these would come from a CMS or API
  const galleryImages = [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Students at campus",
      category: "Campus",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Graduation ceremony",
      category: "Events",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Cultural exchange program",
      category: "Culture",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Japanese language class",
      category: "Education",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Students exploring Tokyo",
      category: "Travel",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Welcome ceremony",
      category: "Events",
    },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedImage])

  if (!mounted) {
    return (
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
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
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Glimpses of our students' journey from Nepal to Japan and their experiences in Japanese education.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <AnimatedSection key={image.id} animation="fadeIn" delay={index * 100}>
              <div
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer aspect-[4/3]"
                onClick={() => setSelectedImage(image.id)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-white text-sm font-medium bg-blue-600/80 px-2 py-1 rounded-full inline-block w-fit mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white text-lg font-semibold">{image.alt}</h3>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
                <span className="sr-only">Close</span>
              </button>
              <img
                src={galleryImages.find((img) => img.id === selectedImage)?.src || "/placeholder.svg"}
                alt={galleryImages.find((img) => img.id === selectedImage)?.alt}
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 text-white">
                <h3 className="text-xl font-semibold">{galleryImages.find((img) => img.id === selectedImage)?.alt}</h3>
                <p className="text-gray-300">{galleryImages.find((img) => img.id === selectedImage)?.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

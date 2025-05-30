"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface SearchDialogProps {
  isOpen: boolean
  onClose: () => void
  dict: any
}

export default function SearchDialog({ isOpen, onClose, dict }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])

  // Sample searchable content - in a real app, this would come from a search API
  const searchableContent = [
    {
      type: "page",
      title: "About Us",
      content: "Educational consultancy specializing in Japanese education",
      href: "#about",
    },
    {
      type: "page",
      title: "Our Vision",
      content: "Leading bridge between Nepali students and Japanese institutions",
      href: "#vision",
    },
    { type: "page", title: "Our Mission", content: "Comprehensive guidance for Japanese education", href: "#mission" },
    {
      type: "service",
      title: "Visa Processing",
      content: "Complete assistance with student visa applications",
      href: "#services",
    },
    {
      type: "service",
      title: "Educational Counseling",
      content: "Personalized guidance for choosing institutions",
      href: "#services",
    },
    {
      type: "service",
      title: "Application Support",
      content: "End-to-end support for college applications",
      href: "#services",
    },
    {
      type: "service",
      title: "Language Preparation",
      content: "Japanese language training and JLPT preparation",
      href: "#services",
    },
    {
      type: "page",
      title: "Student Voice",
      content: "Testimonials from our successful students",
      href: "#testimonials",
    },
    { type: "page", title: "Our Success", content: "500+ students placed, 95% visa success rate", href: "#success" },
    {
      type: "page",
      title: "Photo Gallery",
      content: "Moments from our journey and student experiences",
      href: "#gallery",
    },
    { type: "page", title: "Contact Us", content: "Get in touch with our consultancy team", href: "#contact" },
  ]

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchableContent.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.content.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  const handleResultClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            Search Website
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search for services, information, or pages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              autoFocus
            />
          </div>

          {searchResults.length > 0 && (
            <div className="max-h-96 overflow-y-auto space-y-2">
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  onClick={() => handleResultClick(result.href)}
                  className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{result.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{result.content}</p>
                      <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {result.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {searchQuery && searchResults.length === 0 && (
            <div className="text-center py-8 text-gray-500">No results found for "{searchQuery}"</div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

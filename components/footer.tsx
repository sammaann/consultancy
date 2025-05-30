"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
  ChevronRight,
  Heart,
  Clock,
  ArrowUp,
} from "lucide-react"

interface FooterProps {
  dict: any
  isStudyPage?: boolean
}

export default function Footer({ dict, isStudyPage = false }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSmoothScroll = (href: string) => {
    if (isStudyPage) {
      window.location.href = `/${dict.currentLang}${href}`
      return
    }

    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const quickLinks = [
    { name: "Home", href: isStudyPage ? `/${dict.currentLang}` : "#home" },
    { name: "About Us", href: isStudyPage ? `/${dict.currentLang}#about` : "#about" },
    { name: "Free Consultation", href: isStudyPage ? `/${dict.currentLang}#consultation` : "#consultation" },
    { name: "Our Services", href: isStudyPage ? `/${dict.currentLang}#services` : "#services" },
    { name: "Meet Our Team", href: isStudyPage ? `/${dict.currentLang}#team` : "#team" },
    { name: "Study Materials", href: `/${dict.currentLang}/study` },
    { name: "Contact Us", href: isStudyPage ? `/${dict.currentLang}#contact` : "#contact" },
  ]

  const services = [
    { name: "Visa Processing", href: isStudyPage ? `/${dict.currentLang}#services` : "#services" },
    { name: "Educational Counseling", href: isStudyPage ? `/${dict.currentLang}#services` : "#services" },
    { name: "Application Support", href: isStudyPage ? `/${dict.currentLang}#services` : "#services" },
    { name: "Language Preparation", href: isStudyPage ? `/${dict.currentLang}#services` : "#services" },
  ]

  const resources = [
    { name: "JLPT Preparation", href: `/${dict.currentLang}/study` },
    { name: "Visa Guide", href: `/${dict.currentLang}/study` },
    { name: "Basic Japanese", href: `/${dict.currentLang}/study` },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Top Wave Pattern */}
      <div className="absolute top-0 left-0 right-0 h-8 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-16 text-gray-900" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      {/* Back to Top Button */}
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToTop}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg mr-3">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Golkahikari</h3>
                <p className="text-sm text-gray-400">Educational Consultancy</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Bridging dreams between Nepal and Japan through expert educational guidance and comprehensive support
              services. We're committed to your success in Japanese education.
            </p>

            <div className="flex space-x-3 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 p-2 rounded-full transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h4 className="font-semibold text-lg mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-400" />
                Office Hours
              </h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-800 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
                    onClick={(e) => {
                      if (!link.href.startsWith("/") || (isStudyPage && link.href.includes("#"))) {
                        e.preventDefault()
                        handleSmoothScroll(link.href.replace(`/${dict.currentLang}`, ""))
                      }
                    }}
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 -translate-x-1 group-hover:scale-110 duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-800 pb-2">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
                    onClick={(e) => {
                      if (!service.href.startsWith("/") || (isStudyPage && service.href.includes("#"))) {
                        e.preventDefault()
                        handleSmoothScroll(service.href.replace(`/${dict.currentLang}`, ""))
                      }
                    }}
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 -translate-x-1 group-hover:scale-110 duration-300" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mb-6 mt-8 text-white border-b border-gray-800 pb-2">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link
                    href={resource.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 -translate-x-1 group-hover:scale-110 duration-300" />
                    <span>{resource.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-800 pb-2">Contact Us</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-start group">
                <div className="bg-gray-800 p-2 rounded-lg mr-3 group-hover:bg-blue-600 transition-colors">
                  <MapPin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-1">Our Location</h5>
                  <p className="text-gray-400 text-sm">
                    Kathmandu, Nepal
                    <br />
                    Thamel, Ward No. 26
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-gray-800 p-2 rounded-lg mr-3 group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-1">Call Us</h5>
                  <p className="text-gray-400 text-sm">+977-1-XXXXXXX</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-gray-800 p-2 rounded-lg mr-3 group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-1">Email Us</h5>
                  <p className="text-gray-400 text-sm">info@golkahikari.com</p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h5 className="font-semibold text-lg mb-4 flex items-center">
                <Send className="w-5 h-5 mr-2 text-blue-400" />
                Subscribe to Our Newsletter
              </h5>
              <p className="text-sm text-gray-400 mb-4">
                Get the latest updates on Japanese education opportunities and visa requirements
              </p>
              <div className="flex">
                <Input
                  placeholder="Your email"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 rounded-r-none focus:ring-blue-500 focus:border-blue-500"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-l-none">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Golkahikari Educational Consultancy. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
              <div className="flex items-center text-blue-400">
                <Heart className="w-3 h-3 mr-1" />
                <span>Made with passion in Nepal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

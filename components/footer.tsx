"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react'

interface FooterProps {
  dict: any
}

export default function Footer({ dict }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-8 h-8 text-blue-400 mr-3" />
              <div>
                <h3 className="text-xl font-bold">Golkahikari</h3>
                <p className="text-sm text-gray-400">Educational Consultancy</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Bridging dreams between Nepal and Japan through expert educational guidance and comprehensive support services.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-blue-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-blue-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-blue-600 transition-colors">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#success" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Student Voice
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Photo Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Visa Processing</li>
              <li className="text-gray-300">Educational Counseling</li>
              <li className="text-gray-300">Application Support</li>
              <li className="text-gray-300">Language Preparation</li>
              <li className="text-gray-300">Pre-departure Guidance</li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Kathmandu, Nepal<br />
                  Thamel, Ward No. 26
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+977-1-XXXXXXX</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@golkahikari.com</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h5 className="text-sm font-semibold mb-3">Stay Updated</h5>
              <div className="flex">
                <Input
                  placeholder="Your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 rounded-r-none"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-l-none">
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
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

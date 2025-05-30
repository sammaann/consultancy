"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, GraduationCap, ChevronDown, Search } from 'lucide-react'
import LanguageSwitcher from "./language-switcher"

interface NavigationProps {
  dict: any
  currentLang: string
  onSearchOpen?: () => void
  onApplyOpen?: () => void
}

export default function Navigation({ dict, currentLang, onSearchOpen, onApplyOpen }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const mainNavItems = [
    { key: "home", href: "#home" },
    { key: "about", href: "#about" },
    { key: "services", href: "#services" },
  ]

  const aboutDropdownItems = [
    { key: "vision", href: "#vision" },
    { key: "mission", href: "#mission" },
    { key: "guarantee", href: "#guarantee" },
  ]

  const studentDropdownItems = [
    { key: "testimonials", href: "#testimonials" },
    { key: "success", href: "#success" },
    { key: "gallery", href: "#gallery" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center group">
            <div className="relative">
              <GraduationCap className="w-10 h-10 text-blue-600 mr-3 group-hover:text-blue-700 transition-colors" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                Golkahikari
              </span>
              <div className="text-sm text-gray-500 font-medium">Educational Consultancy</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Main Navigation Items */}
            {mainNavItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
              >
                {dict.nav[item.key]}
              </Link>
            ))}

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium">
                About
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2">
                  {aboutDropdownItems.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                    >
                      {dict.nav[item.key]}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Student Experience Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("student")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium">
                Student Experience
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {activeDropdown === "student" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2">
                  {studentDropdownItems.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                    >
                      {dict.nav[item.key]}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="#contact"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
            >
              {dict.nav.contact}
            </Link>
          </div>

          {/* Right Side - Search, Language Switcher & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {onSearchOpen && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onSearchOpen}
                className="p-2 hover:bg-gray-100 transition-colors"
              >
                <Search className="w-4 h-4" />
              </Button>
            )}
            <LanguageSwitcher currentLang={currentLang} />
            <Button
              onClick={onApplyOpen}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <LanguageSwitcher currentLang={currentLang} />
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {/* Mobile Main Items */}
              {mainNavItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {dict.nav[item.key]}
                </Link>
              ))}

              {/* Mobile About Section */}
              <div className="py-2">
                <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">About</div>
                {aboutDropdownItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="block px-6 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {dict.nav[item.key]}
                  </Link>
                ))}
              </div>

              {/* Mobile Student Experience Section */}
              <div className="py-2">
                <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Student Experience
                </div>
                {studentDropdownItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="block px-6 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {dict.nav[item.key]}
                  </Link>
                ))}
              </div>

              <Link
                href="#contact"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {dict.nav.contact}
              </Link>

              {/* Mobile Search & CTA */}
              <div className="pt-4 space-y-2">
                {onSearchOpen && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      onSearchOpen()
                      setIsOpen(false)
                    }}
                    className="w-full justify-start"
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Search Website
                  </Button>
                )}
                <Button
                  onClick={() => {
                    onApplyOpen?.()
                    setIsOpen(false)
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

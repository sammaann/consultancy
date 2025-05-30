"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight"
  delay?: number
}

export default function AnimatedSection({
  children,
  className,
  animation = "fadeIn",
  delay = 0,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay, mounted])

  const animationClasses = {
    fadeIn: mounted ? "opacity-0 transition-opacity duration-1000" : "",
    slideUp: mounted ? "opacity-0 translate-y-10 transition-all duration-1000" : "",
    slideLeft: mounted ? "opacity-0 translate-x-10 transition-all duration-1000" : "",
    slideRight: mounted ? "opacity-0 -translate-x-10 transition-all duration-1000" : "",
  }

  const visibleClasses = {
    fadeIn: "opacity-100",
    slideUp: "opacity-100 translate-y-0",
    slideLeft: "opacity-100 translate-x-0",
    slideRight: "opacity-100 translate-x-0",
  }

  return (
    <div
      ref={ref}
      className={cn(animationClasses[animation], mounted && isVisible && visibleClasses[animation], className)}
    >
      {children}
    </div>
  )
}

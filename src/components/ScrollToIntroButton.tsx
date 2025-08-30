'use client'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { ChevronUp } from 'lucide-react'

const ScrollToIntroButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after Introduction section (approximately 100vh from top)
      const introSectionEnd = window.innerHeight
      const currentScroll = window.scrollY

      setIsVisible(currentScroll > introSectionEnd)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <Link to="Intro" smooth={true} duration={800}>
      <button
        className="fixed bottom-8 right-8 z-50 bg-[var(--heading-primary)] backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white/80 hover:text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
        aria-label="Scroll to Introduction"
      >
        <ChevronUp className="w-6 h-6 group-hover:animate-bounce" />
      </button>
    </Link>
  )
}

export default ScrollToIntroButton

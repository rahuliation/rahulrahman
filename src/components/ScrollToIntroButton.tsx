'use client'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { ChevronUp } from 'lucide-react'
import { useIsMobile } from '@/hooks/use-mobile'

const ScrollToIntroButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    // Auto full screen for mobile clients
    if (isMobile) {
      const requestFullScreen = async () => {
        try {
          if (document.documentElement.requestFullscreen) {
            await document.documentElement.requestFullscreen()
          } else if ((document.documentElement as any).webkitRequestFullscreen) {
            await (document.documentElement as any).webkitRequestFullscreen()
          } else if ((document.documentElement as any).msRequestFullscreen) {
            await (document.documentElement as any).msRequestFullscreen()
          }
        } catch (error) {
          console.log('Full screen request failed:', error)
        }
      }

      // Request full screen after a short delay to ensure user interaction
      const timer = setTimeout(() => {
        requestFullScreen()
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [isMobile])

  useEffect(() => {
    const handleScroll = () => {
      // Show button after Introduction section
      // On mobile: show after double introduction (2 * 100vh)
      // On desktop: show after single introduction (1 * 100vh)
      const introSectionEnd = isMobile ? window.innerHeight * 2 : window.innerHeight
      const currentScroll = window.scrollY

      setIsVisible(currentScroll > introSectionEnd)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

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

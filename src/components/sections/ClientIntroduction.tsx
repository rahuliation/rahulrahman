'use client'

import { Profile, Skill } from '@/payload-types'
import { Badge } from '../ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { ArrowDownButton } from '../ArrowDownButton'
import { ScrollTo } from '../Section'
import { motion, useScroll, useTransform, useSpring, useInView } from 'motion/react'
import { useState, useRef, useEffect } from 'react'

// Animated Gradient Background Component
const GradientBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 animate-pulse" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>
    </div>
  )
}

// Animated Floating Icons
const FloatingIcons = () => {
  const icons = ['🚀', '💻', '🎨', '⚡', '🔥', '✨', '🎯', '🌟']

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl opacity-20"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: index * 0.5,
            ease: 'easeInOut',
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  )
}

// Animated Skill Badge Component
const AnimatedSkillBadge = ({ skill }: { skill: Skill }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Badge
        variant="outline"
        className="text-sm px-4 font-extrabold py-4 border-[var(--heading-primary)] relative overflow-hidden"
      >
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0.8 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {skill.name}
        </motion.span>
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
        )}
      </Badge>
    </motion.div>
  )
}

// Animated Card Component
const AnimatedCard = ({ card, index }: { card: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        y: -10,
        transition: { duration: 0.3 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <ScrollTo to={card.title ?? ''} smooth={true}>
        <Card className="group cursor-pointer py-6 transition-all duration-300 border-0 bg-[var(--card)] dark:bg-slate-800/80 backdrop-blur-sm relative overflow-hidden">
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          <CardHeader className="text-center relative z-10">
            <motion.div
              className="w-16 h-16 p-1 bg-gradient-to-br bg-[var(--background-secondary)] rounded-full flex items-center justify-center mx-auto mb-4"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
              dangerouslySetInnerHTML={{ __html: card.icon || '' }}
            />
            <motion.h3
              className="text-xl md:xxl text-white/70"
              animate={{
                color: isHovered ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.7)',
              }}
              transition={{ duration: 0.3 }}
            >
              {card.title || ''}
            </motion.h3>
          </CardHeader>

          <CardContent className="text-center relative z-10">
            <motion.p
              className="h-20 text-md font-medium text-white/80 dark:text-slate-300"
              animate={{
                color: isHovered ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.8)',
              }}
              transition={{ duration: 0.3 }}
            >
              {card.subtitle || ''}
            </motion.p>
            <motion.p
              className="hidden md:block h-12 text-sm text-white/60 dark:text-slate-400 mt-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 48 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {card.description || ''}
            </motion.p>
          </CardContent>

          {/* Animated border */}
          <motion.div
            className="absolute inset-0 border-2 border-transparent rounded-lg"
            animate={{
              borderColor: isHovered
                ? ['rgba(147, 51, 234, 0.3)', 'rgba(59, 130, 246, 0.3)', 'rgba(147, 51, 234, 0.3)']
                : 'transparent',
            }}
            transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
          />
        </Card>
      </ScrollTo>
    </motion.div>
  )
}

// Animated Title Component with Typing Effect
const AnimatedTitle = ({ title }: { title: string }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < title.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + title[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, title])

  return (
    <motion.h1
      className="text-3xl md:text-7xl py-2 mx-auto w-5/6 lg:w-2/3 font-extrabold bg-[var(--heading-primary)] text-white/80 tracking-tight text-balance mb-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {displayText}
      <motion.span
        className="inline-block w-1 h-16 bg-white/80 ml-1"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </motion.h1>
  )
}

// Animated Subtitle Component
const AnimatedSubtitle = ({ subtitle }: { subtitle: string }) => {
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(subtitleRef, { once: true, margin: '-50px' })

  return (
    <motion.p
      ref={subtitleRef}
      className="text-xl md:text-2xl text-stone-900 dark:text-slate-300 mb-8 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {subtitle}
    </motion.p>
  )
}

// Client Introduction Component
export const ClientIntroduction = ({ profile }: { profile: Profile }) => {
  return (
    <>
      {/* Background Effects */}
      <GradientBackground />
      <FloatingIcons />

      <div className="w-full relative z-10">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <AnimatedTitle title={profile.introTitle || ''} />
          <AnimatedSubtitle subtitle={profile.introSubtitle || ''} />

          {/* Animated Skills */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {profile.coreSkills?.map((cskill) => (
              <AnimatedSkillBadge key={cskill.id} skill={cskill.skill as Skill} />
            ))}
          </motion.div>
        </motion.div>

        {/* Animated Cards Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {profile.introCard?.map((card, index) => (
            <AnimatedCard key={card.id} card={card} index={index} />
          ))}
        </motion.div>

        {/* Animated Arrow Down Button */}
        <motion.div
          className="flex hidden lg:block text-center justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <ArrowDownButton to="Skills" />
        </motion.div>
      </div>
    </>
  )
}

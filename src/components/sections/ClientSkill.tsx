'use client'

import { PaginatedDocs } from 'payload'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SkillCategory } from '@/payload-types.js'
import { Award, Code, Zap, Sparkles, Star, Rocket, Brain, Palette } from 'lucide-react'
import { ShimmeringText } from '../animate-ui/text/shimmering'
import { TypingText } from '../animate-ui/text/typing'
import { GradientText } from '../animate-ui/text/gradient'
import { MagneticButton } from '../animate-ui/buttons/magnetic'
import { motion, useScroll, useTransform, useInView } from 'motion/react'
import { useState, useRef, useEffect } from 'react'

// Animated Gradient Background Component
const GradientBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-slate-700/20 to-slate-900/20 animate-pulse" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-slate-700/10 rounded-full blur-3xl animate-pulse delay-2000" />
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

// Animated Background Particles
const AnimatedParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i)

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-2 h-2 bg-gradient-to-r from-slate-400/20 to-slate-500/20 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            opacity: 0,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: particle * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

// Animated Skill Badge with Hover Effects
const AnimatedSkillBadge = ({ skill, index }: { skill: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.1,
        rotate: 2,
        transition: { duration: 0.2 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Badge
        variant="secondary"
        className="text-xs bg-background text-slate-900 border border-slate-500/40  px-3 py-1 relative overflow-hidden cursor-pointer"
      >
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0.9 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {skill.name}
        </motion.span>
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-slate-500/40 to-slate-600/40"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
        )}
        <motion.div
          className="absolute inset-0 border border-slate-400/50 rounded-full"
          animate={{
            scale: isHovered ? 1.2 : 1,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </Badge>
    </motion.div>
  )
}

// Animated Category Card
const AnimatedCategoryCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: '-50px' })

  const iconMap: { [key: string]: any } = {
    Frontend: Code,
    Backend: Zap,
    Database: Award,
    DevOps: Rocket,
    Design: Palette,
    'AI/ML': Brain,
    default: Star,
  }

  const IconComponent = iconMap[category.name] || iconMap.default

  return (
    <MagneticButton
      strength={0.2}
      className="w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        whileHover={{
          scale: 1.02,
          y: -5,
          transition: { duration: 0.3 },
        }}
      >
        <Card className="group cursor-pointer transition-all duration-300 border-0  backdrop-blur-sm relative overflow-hidden">
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-slate-500/10 to-slate-600/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Animated border */}
          <motion.div
            className="absolute inset-0 border-2 border-transparent rounded-lg"
            animate={{
              borderColor: isHovered
                ? [
                    'rgba(148, 163, 184, 0.3)',
                    'rgba(100, 116, 139, 0.3)',
                    'rgba(148, 163, 184, 0.3)',
                  ]
                : 'transparent',
            }}
            transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
          />

          <CardHeader className="relative z-10">
            <div className="flex items-center gap-3">
              <motion.div
                className="w-12 h-12 bg-background rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <IconComponent className="w-6 h-6 text-slate-700" />
              </motion.div>
              <motion.h3
                className="text-xl font-semibold text-white/80"
                animate={{
                  color: isHovered ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
                }}
                transition={{ duration: 0.3 }}
              >
                {category.name}
              </motion.h3>
            </div>
          </CardHeader>

          <CardContent className="relative z-10">
            <div className="flex flex-wrap gap-2">
              {category.skills?.map((skillItem: any, skillIndex: number) => {
                const skill = skillItem.skill
                if (!skill || !skill.shouldDisplay) return null

                return <AnimatedSkillBadge key={skillIndex} skill={skill} index={skillIndex} />
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </MagneticButton>
  )
}

// Animated Header Section
const AnimatedHeader = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(headerRef, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={headerRef}
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
    >
      <div className="inline-flex items-center gap-2 bg-[var(--background-secondary)]/20 backdrop-blur-sm border border-[var(--background-secondary)]/30 rounded-full px-6 py-2 mb-6">
        <Code className="w-5 h-5 text-[var(--heading-primary)]" />
        <span className="text-sm font-medium text-[var(--heading-primary)]">
          Technical Expertise
        </span>
      </div>
      <h2 className="text-4xl md:text-6xl font-extrabold text-[var(--heading-primary)] tracking-tight mb-6">
        <ShimmeringText
          text="Skills & Technologies"
          duration={2}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
          color="var(--heading-primary)"
          shimmeringColor="var(--background-secondary)"
        />
      </h2>

      <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        A comprehensive overview of the technologies, frameworks, and tools I work with
      </p>
    </motion.div>
  )
}

// Main Client Skill Component
export const ClientSkill = ({
  skillCategories,
}: {
  skillCategories: PaginatedDocs<SkillCategory>
}) => {
  return (
    <>
      <div className="relative z-10">
        {/* Header Section */}
        <AnimatedHeader />

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {skillCategories.docs.map((category, index) => (
            <AnimatedCategoryCard key={index} category={category} index={index} />
          ))}
        </motion.div>
      </div>
    </>
  )
}

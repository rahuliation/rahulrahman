'use client'

import { Education } from '@/payload-types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, GraduationCap, MapPin, BookOpen, Zap, Award, Star } from 'lucide-react'
import { RichTextHTML } from '../RichTextHTML'
import { PaginatedDocs } from 'payload'
import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'

// Animated Education Card Component
const AnimatedEducationCard = ({ education, index }: { education: Education; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: '-50px' })

  return (
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
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="group cursor-pointer transition-all duration-300 border-0 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm relative overflow-hidden">
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-slate-600/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Animated border */}
        <motion.div
          className="absolute inset-0 border-2 border-transparent rounded-lg"
          animate={{
            borderColor: isHovered
              ? ['rgba(148, 163, 184, 0.3)', 'rgba(100, 116, 139, 0.3)', 'rgba(148, 163, 184, 0.3)']
              : 'transparent',
          }}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        />

        <CardHeader className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-4">
              {/* Animated Icon */}
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-slate-600/20 to-slate-700/20 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <GraduationCap className="w-6 h-6 text-slate-300" />
              </motion.div>

              <div>
                <motion.h3
                  className="text-2xl font-semibold text-white/90 mb-2"
                  animate={{
                    color: isHovered ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.9)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {education.degree}
                </motion.h3>

                <div className="flex items-center gap-2 text-slate-300 mb-1">
                  <BookOpen className="w-4 h-4" />
                  <span className="font-medium">{education.institution}</span>
                </div>

                {education.board && (
                  <div className="flex items-center gap-2 text-slate-400 mb-1">
                    <MapPin className="w-4 h-4" />
                    <span>{education.board}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Year Badge */}
            <motion.div
              className="flex items-center gap-2 bg-slate-600/30 border border-slate-500/40 rounded-full px-4 py-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Calendar className="w-4 h-4 text-slate-300" />
              <span className="text-sm font-medium text-slate-200">{education.yearOfPassing}</span>
            </motion.div>
          </div>
        </CardHeader>

        <CardContent className="relative z-10">
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <motion.p
              className="text-slate-300 leading-relaxed"
              animate={{ color: isHovered ? 'rgba(203, 213, 225, 1)' : 'rgba(203, 213, 225, 0.8)' }}
              transition={{ duration: 0.3 }}
            >
              Successfully completed {education.degree} from {education.institution} in{' '}
              {education.yearOfPassing}
              {education.board && ` under ${education.board}`}.
            </motion.p>
          </div>

          {/* Achievement Badge */}
          <motion.div
            className="flex items-center gap-2 mt-4 bg-gradient-to-r from-slate-600/20 to-slate-700/20 border border-slate-500/30 rounded-lg px-3 py-2 w-fit"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          >
            <Award className="w-4 h-4 text-slate-300" />
            <span className="text-sm font-medium text-slate-200">Degree Completed</span>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Main Client Education Component
export const ClientEducation = ({ educations }: { educations: PaginatedDocs<Education> }) => {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {educations.docs.map((education: Education, index: number) => (
        <AnimatedEducationCard key={education.id} education={education} index={index} />
      ))}
    </motion.div>
  )
}

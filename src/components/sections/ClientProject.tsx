'use client'

import { PaginatedDocs } from 'payload'
import { Project, Media, Skill } from '@/payload-types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { RichTextHTML } from '../RichTextHTML'
import { Button } from '@/components/ui/button'
import { ExternalLink, FolderOpen, Zap, Star, Rocket, Eye } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { MagneticButton } from '../animate-ui/buttons/magnetic'
import { GradientText } from '../animate-ui/text/gradient'
import RichText from '../RichText'

// Animated Project Card Component
const AnimatedProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: '-100px' })

  const projectImage = project.image as Media
  const projectSkills = project.skills as Skill[]

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start ${
        index % 2 === 1 ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Image Section */}
      <motion.div
        className="w-full lg:w-1/2"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          {projectImage?.url ? (
            <div className="aspect-[4/3] relative bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
              <div className="flex items-center justify-center w-full h-full">
                <motion.img
                  src={projectImage.url}
                  alt={projectImage.alt || project.name}
                  className="max-w-[60%] max-h-[60%] object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          ) : (
            <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center rounded-lg">
              <div className="text-slate-500 dark:text-slate-400 text-center">
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 border-2 border-slate-600 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-2xl">📁</span>
                </motion.div>
                <p className="text-sm font-medium">No image available</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="w-full lg:w-1/2 space-y-6"
        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
        transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
      >
        <div>
          <motion.h3
            className="text-2xl font-bold text-[var(--heading-primary)] mb-2"
            whileHover={{ color: 'rgba(255, 255, 255, 1)' }}
            transition={{ duration: 0.3 }}
          >
            {project.name}
          </motion.h3>
          {project.subtitle && (
            <motion.p
              className="text-lg text-muted-foreground font-medium mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
            >
              {project.subtitle}
            </motion.p>
          )}
        </div>

        {/* Description */}
        {project.description && (
          <motion.div
            className="prose prose-sm dark:prose-invert text-muted-foreground max-w-none"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
          >
            <RichTextHTML data={project.description} />
          </motion.div>
        )}

        {/* Responsibilities */}
        {project.contributions && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
          >
            <h4 className="text-sm font-semibold text-[var(--heading-primary)] mb-3 uppercase tracking-wide flex items-center gap-2">
              <Star className="w-4 h-4 text-[var(--background-secondary)]" />
              My Contribution
            </h4>
            <div className="text-muted-foreground leading-relaxed">
              <RichText data={project.contributions} />
            </div>
          </motion.div>
        )}

        {/* Skills */}
        {projectSkills && projectSkills.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
          >
            <h4 className="text-sm font-semibold text-[var(--heading-primary)] mb-3 uppercase tracking-wide flex items-center gap-2">
              <Zap className="w-4 h-4 text-[var(--background-secondary)]" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {projectSkills.map((skill: Skill, skillIndex: number) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.9 + skillIndex * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gradient-to-r from-slate-600/30 to-slate-700/30 border border-slate-500/40 text-white/90 px-3 py-1 font-medium hover:from-slate-500/40 hover:to-slate-600/40 transition-all duration-300"
                  >
                    {skill.name}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

// Main Client Project Component
export const ClientProject = ({ projects }: { projects: PaginatedDocs<Project> }) => {
  return (
    <motion.div
      className="max-w-6xl mx-auto space-y-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {projects.docs.map((project: Project, index: number) => (
        <AnimatedProjectCard key={project.id} project={project} index={index} />
      ))}
    </motion.div>
  )
}

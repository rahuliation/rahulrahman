'use client'

import * as React from 'react'
import { motion, type HTMLMotionProps } from 'motion/react'
import { cn } from '@/lib/utils'

type GradientTextProps = {
  text: string
  fromColor?: string
  toColor?: string
  duration?: number
  className?: string
  animate?: boolean
} & Omit<HTMLMotionProps<'span'>, 'children'>

function GradientText({
  text,
  fromColor = '#8b5cf6',
  toColor = '#3b82f6',
  duration = 3,
  className,
  animate = true,
  ...props
}: GradientTextProps) {
  return (
    <motion.span
      className={cn('bg-gradient-to-r bg-clip-text text-transparent', className)}
      style={{
        backgroundImage: `linear-gradient(to right, ${fromColor}, ${toColor})`,
      }}
      animate={
        animate
          ? {
              backgroundImage: [
                `linear-gradient(to right, ${fromColor}, ${toColor})`,
                `linear-gradient(to right, ${toColor}, ${fromColor})`,
                `linear-gradient(to right, ${fromColor}, ${toColor})`,
              ],
            }
          : {}
      }
      transition={{ duration, repeat: animate ? Infinity : 0, ease: 'easeInOut' }}
      {...props}
    >
      {text}
    </motion.span>
  )
}

export { GradientText, type GradientTextProps }

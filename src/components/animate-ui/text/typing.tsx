'use client'

import * as React from 'react'
import { motion, type HTMLMotionProps } from 'motion/react'
import { cn } from '@/lib/utils'

type TypingTextProps = {
  text: string
  speed?: number
  delay?: number
  className?: string
  cursor?: boolean
  cursorBlink?: boolean
} & Omit<HTMLMotionProps<'span'>, 'children'>

function TypingText({
  text,
  speed = 100,
  delay = 0,
  className,
  cursor = true,
  cursorBlink = true,
  ...props
}: TypingTextProps) {
  const [displayText, setDisplayText] = React.useState('')
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return (
    <motion.span
      className={cn('inline-block', className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      {...props}
    >
      {displayText}
      {cursor && (
        <motion.span
          className="inline-block w-0.5 h-6 bg-current ml-1"
          animate={cursorBlink ? { opacity: [1, 0, 1] } : {}}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
    </motion.span>
  )
}

export { TypingText, type TypingTextProps }

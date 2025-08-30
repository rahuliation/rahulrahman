'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import { Link } from 'react-scroll'
import { ChevronDown } from 'lucide-react'

export const ArrowDownButton: React.FC<{ to: string; className?: string }> = ({
  to,
  className,
}) => {
  return (
    <Link to={to} smooth={true}>
      <button
        className={cn(
          'group p-4 cursor-pointer rounded-full bg-[var(--heading-primary)] backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 animate-bounce',
          className,
        )}
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-6 h-6 text-white/80 group-hover:text-white transition-colors duration-300" />
      </button>
    </Link>
  )
}

'use client'

import React from 'react'
import { Link } from 'react-scroll'

export const ArrowDownButton: React.FC<{ to: string }> = ({ to }) => {
  return (
    <Link to={to} smooth={true}>
      <button
        className="group p-4 cursor-pointer rounded-full bg-[var(--heading-primary)] backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 animate-bounce"
        aria-label="Scroll to next section"
      >
        <svg
          className="w-6 h-6 text-white/80 group-hover:text-white transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
    </Link>
  )
}

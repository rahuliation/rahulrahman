'use client'

import { Button } from './ui/button'
import { Download } from 'lucide-react'

interface ResumeButtonProps {
  cvLink?: string | null
}

export const ResumeButton = ({ cvLink }: ResumeButtonProps) => {
  if (!cvLink) return null

  return (
    <div className="flex justify-center mt-6">
      <Button
        variant="outline"
        size="lg"
        onClick={() => window.open(cvLink!, '_blank')}
        className="gap-2 bg-[var(--heading-primary)] text-white/80"
      >
        <Download className="w-4 h-4" />
        Download Resume
      </Button>
    </div>
  )
}

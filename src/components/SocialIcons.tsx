'use client'

import { IconButton } from './animate-ui/buttons/icon'
import { Github, Linkedin, Twitter } from 'lucide-react'

interface SocialIconsProps {
  githubLink?: string | null
  linkedinLink?: string | null
  twitterLink?: string | null
}

export const SocialIcons = ({ githubLink, linkedinLink, twitterLink }: SocialIconsProps) => {
  return (
    <div className="flex justify-center items-center gap-3 mt-6">
      {githubLink && (
        <IconButton
          icon={Github}
          size="sm"
          onClick={() => window.open(githubLink!, '_blank')}
          className="hover:bg-gray-100 dark:hover:bg-gray-800"
        />
      )}
      {linkedinLink && (
        <IconButton
          icon={Linkedin}
          size="sm"
          color={[0, 119, 181]}
          onClick={() => window.open(linkedinLink!, '_blank')}
          className="hover:bg-blue-50 dark:hover:bg-blue-950"
        />
      )}
      {twitterLink && (
        <IconButton
          icon={Twitter}
          size="sm"
          color={[29, 161, 242]}
          onClick={() => window.open(twitterLink!, '_blank')}
          className="hover:bg-blue-50 dark:hover:bg-blue-950"
        />
      )}
    </div>
  )
}

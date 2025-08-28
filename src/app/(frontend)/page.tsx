import React from 'react'

import './styles.css'
import { SkillComp } from '@/components/sections/Skill'
import { IntroductionComp } from '@/components/sections/Introduction'
import { ProjectComp } from '@/components/sections/Project'
import { ExperienceComp } from '@/components/sections/Experinece'

export default async function HomePage() {
  return (
    <div className="w-full bg-[var(--background)] text-[var(--foreground)]">
      <IntroductionComp />
      <SkillComp />
      <ExperienceComp />
      <ProjectComp />
    </div>
  )
}

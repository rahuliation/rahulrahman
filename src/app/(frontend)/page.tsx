import React from 'react'

import './styles.css'
import { SkillComp } from '@/components/sections/Skill'
import { IntroductionComp } from '@/components/sections/Introduction'
import { ProjectComp } from '@/components/sections/Project'
import { ExperienceComp } from '@/components/sections/Experinece'
import { getPayload } from 'payload'
import config from '@payload-config'

export default async function HomePage() {
  const payload = await getPayload({ config })

  // Fetch skill categories from the database
  const skillCategories = await payload.find({
    collection: 'skill-categories',
    where: {
      shouldDisplay: {
        equals: true,
      },
    },
    limit: 1000,
    depth: 2, // Include the related skills
    sort: 'sortIndex', // Sort by sortIndex field
  })

  const experiences = await payload.find({
    collection: 'experiences',
    limit: 1000,
    depth: 2, // Include related skills and projects
    sort: '-startDate', // Sort by start date, newest first
  })

  // Fetch projects from the database
  const projects = await payload.find({
    collection: 'projects',
    limit: 1000,
    depth: 2, // Include related skills and media
    sort: '-createdAt', // Sort by creation date, newest first
  })

  return (
    <div className="w-full bg-[var(--background)] text-[var(--foreground)]">
      <IntroductionComp />
      <SkillComp skillCategories={skillCategories} />
      <ExperienceComp experiences={experiences} />
      <ProjectComp projects={projects} />
    </div>
  )
}


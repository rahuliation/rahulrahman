import React from 'react'

import './styles.css'
import { SkillComp } from '@/components/sections/Skill'
import { IntroductionComp } from '@/components/sections/Introduction'
import { ProjectComp } from '@/components/sections/Project'
import { ExperienceComp } from '@/components/sections/Experinece'
import { ContactComp } from '@/components/sections/Contact'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Element } from 'react-scroll'
import Section from '@/components/Section'
import { EducationComp } from '@/components/sections/Education'
import { BackgroundEffects } from '@/components/BackgroundEffects'

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
    sort: '-order', // Sort by creation date, newest first
  })

  const educations = await payload.find({
    collection: 'educations',
    limit: 1000,
    depth: 2, // Include related skills and media
    sort: '-passingYear', // Sort by creation date, newest first
  })

  const profile = await payload.findGlobal({
    slug: 'profile',
  })

  return (
    <div className="w-full bg-[var(--background)] text-[var(--foreground)] relative overflow-hidden">
      {/* Global Background Effects */}
      <BackgroundEffects />

      <div className="relative z-10">
        <Section name="Intro">
          <IntroductionComp profile={profile} />
        </Section>
        <Section name="Skills">
          <SkillComp skillCategories={skillCategories} />
        </Section>
        <Section name="Experience">
          <ExperienceComp experiences={experiences} />
        </Section>
        <Section name="Projects">
          <ProjectComp projects={projects} />
        </Section>
        <Section name="Education">
          <EducationComp educations={educations} />
        </Section>
        <Section name="Contact">
          <ContactComp profile={profile} />
        </Section>
      </div>
    </div>
  )
}

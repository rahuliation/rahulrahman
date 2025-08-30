import { PaginatedDocs } from 'payload'
import { SkillCategory } from '@/payload-types.js'
import { ClientSkill } from './ClientSkill'

export const SkillComp = async ({
  skillCategories,
}: {
  skillCategories: PaginatedDocs<SkillCategory>
}) => {
  return (
    <section id="Skills" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 relative overflow-hidden">
      <ClientSkill skillCategories={skillCategories} />
    </section>
  )
}

import { PaginatedDocs } from 'payload'
import { Project, Media, Skill } from '@/payload-types'
import { ClientProject } from './ClientProject'

export const ProjectComp = async ({ projects }: { projects: PaginatedDocs<Project> }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-[var(--background-secondary)]/20 backdrop-blur-sm border border-[var(--background-secondary)]/30 rounded-full px-6 py-2 mb-6">
          <span className="text-sm font-medium text-[var(--heading-primary)]">
            Creative Portfolio
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-[var(--heading-primary)] tracking-tight mb-6">
          Portfolio
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A showcase of my recent projects and innovative work
        </p>
      </div>

      <ClientProject projects={projects} />
    </div>
  )
}

import { getPayload, PaginatedDocs } from 'payload'
import config from '@payload-config'
import { Project, Media, Skill } from '@/payload-types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { RichTextHTML } from '../RichTextHTML'

export const ProjectComp = async ({ projects }: { projects: PaginatedDocs<Project> }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-4xl md:text-5xl text-center font-extrabold text-[var(--heading-primary)] tracking-tight text-balance mb-6">
          Projects
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          A showcase of my recent projects and work
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.docs.map((project: Project) => {
          const projectImage = project.image as Media
          const projectSkills = project.skills as Skill[]

          return (
            <Card
              key={project.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 dark:bg-slate-800/80 backdrop-blur-sm overflow-hidden"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white/70">
                  {project.name}
                </CardTitle>
                {project.subtitle && (
                  <p className="text-sm text-white/50 font-medium">{project.subtitle}</p>
                )}
              </CardHeader>
              <CardContent>
                <div className="flex h-full gap-4">
                  <div className="flex flex-col gap-4">
                    {project.responsibilities && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white/70 mb-2">
                          Responsibilities:
                        </h4>
                        <p className="text-sm text-white/50 whitespace-pre-line">
                          {project.responsibilities}
                        </p>
                      </div>
                    )}

                    <div className="prose prose-sm dark:prose-invert text-white/50 max-w-none mb-4">
                      {project.description && <RichTextHTML data={project.description} />}
                    </div>

                    {projectSkills && projectSkills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {projectSkills.map((skill: Skill, skillIndex: number) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="text-xs text-white bg-[var(--background-secondary)] text-[var(--sidebar)] px-3 py-1"
                          >
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="w-2/5 h-full flex items-center">
                    <div className="overflow-hidden flex items-center">
                      {project.projectUrl ? (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer block"
                        >
                          <img
                            src={projectImage?.url || ''}
                            alt={projectImage?.alt || project.name}
                            className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </a>
                      ) : (
                        <img
                          src={projectImage?.url || ''}
                          alt={projectImage?.alt || project.name}
                          className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

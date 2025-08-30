import { PaginatedDocs } from 'payload'
import { Project, Media, Skill } from '@/payload-types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { RichTextHTML } from '../RichTextHTML'
import { Button } from '@/components/ui/button'
import { ExternalLink, FolderOpen, Zap } from 'lucide-react'
import { ShimmeringText } from '../animate-ui/text/shimmering'

export const ProjectComp = async ({ projects }: { projects: PaginatedDocs<Project> }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-[var(--background-secondary)]/20 backdrop-blur-sm border border-[var(--background-secondary)]/30 rounded-full px-6 py-2 mb-6">
          <FolderOpen className="w-5 h-5 text-[var(--heading-primary)]" />
          <span className="text-sm font-medium text-[var(--heading-primary)]">
            Creative Portfolio
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-[var(--heading-primary)] tracking-tight mb-6">
          <ShimmeringText
            text="Portfolio"
            duration={2}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
            color="var(--heading-primary)"
            shimmeringColor="var(--background-secondary)"
          />
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A showcase of my recent projects and innovative work
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {projects.docs.map((project: Project, index: number) => {
          const projectImage = project.image as Media
          const projectSkills = project.skills as Skill[]

          return (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  {projectImage?.url ? (
                    <div className="aspect-[4/3] relative bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                      {project.projectUrl ? (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full h-full group flex items-center justify-center"
                        >
                          <img
                            src={projectImage.url}
                            alt={projectImage.alt || project.name}
                            className="max-w-[60%] max-h-[60%] object-contain transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="cursor-pointer absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <Button
                                variant="secondary"
                                size="sm"
                                className="bg-white/95 text-black hover:bg-white shadow-lg"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                View Project
                              </Button>
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center justify-center w-full h-full">
                          <img
                            src={projectImage.url}
                            alt={projectImage.alt || project.name}
                            className="max-w-[60%] max-h-[60%] object-contain"
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center rounded-lg">
                      <div className="text-slate-500 dark:text-slate-400 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 border-2 border-slate-300 dark:border-slate-600 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">📁</span>
                        </div>
                        <p className="text-sm font-medium">No image available</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--heading-primary)] mb-2">
                    {project.name}
                  </h3>
                  {project.subtitle && (
                    <p className="text-lg text-muted-foreground font-medium mb-4">
                      {project.subtitle}
                    </p>
                  )}
                </div>
                {/* Description */}
                {project.description && (
                  <div className="prose prose-sm dark:prose-invert text-muted-foreground max-w-none">
                    <RichTextHTML data={project.description} />
                  </div>
                )}
                {/* Responsibilities */}
                {project.responsibilities && (
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--heading-primary)] mb-3 uppercase tracking-wide">
                      My Contribution
                    </h4>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {project.responsibilities}
                    </p>
                  </div>
                )}
                {/* Skills */}
                {projectSkills && projectSkills.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--heading-primary)] mb-3 uppercase tracking-wide">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {projectSkills.map((skill: Skill, skillIndex: number) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-3 py-1 font-medium"
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}{' '}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

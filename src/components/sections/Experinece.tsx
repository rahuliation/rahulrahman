import { Experience, Skill, Project } from '@/payload-types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Building2, MapPin } from 'lucide-react'
import { RichTextHTML } from '../RichTextHTML'
import { PaginatedDocs } from 'payload'

export const ExperienceComp = async ({
  experiences,
}: {
  experiences: PaginatedDocs<Experience>
}) => {
  // Fetch experiences from the database

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    })
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-16 py-8">
      <div className="mb-8">
        <h2 className="text-4xl md:text-5xl text-center font-extrabold text-[var(--heading-primary)] tracking-tight text-balance mb-6">
          Experience
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          My professional journey and work experience
        </p>
      </div>

      <div className="space-y-6">
        {experiences.docs.map((experience: Experience) => {
          const experienceSkills = experience.skills as Skill[]
          const experienceProjects = experience.projects as Project[]

          return (
            <Card
              key={experience.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 dark:bg-slate-800/80 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-semibold text-white/70">
                      {experience.designation}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1 text-white/50">
                      <Building2 className="w-4 h-4" />
                      <span>{experience.companyName}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {formatDate(experience.startDate)} -{' '}
                      {experience.isCurrentJob ? 'Present' : formatDate(experience.endDate || '')}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm dark:prose-invert max-w-none mb-4">
                  <p className="text-muted-foreground text-white/70">
                    {experience.description && <RichTextHTML data={experience.description} />}
                  </p>
                </div>

                {experienceSkills && experienceSkills.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Skills Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experienceSkills.map((skill: Skill, skillIndex: number) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs bg-[var(--background-secondary)] text-[var(--foreground)] px-3 py-1"
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {experienceProjects && experienceProjects.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium mb-2">Related Projects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experienceProjects.map((project: Project, projectIndex: number) => (
                        <Badge key={projectIndex} variant="outline" className="text-xs px-3 py-1">
                          {project.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

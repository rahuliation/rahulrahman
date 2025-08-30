import { Experience, Skill, Project } from '@/payload-types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Building2, MapPin, ExternalLink, Award, Users, Zap } from 'lucide-react'
import { RichTextHTML } from '../RichTextHTML'
import { PaginatedDocs } from 'payload'
import { ShimmeringText } from '../animate-ui/text/shimmering'

export const ExperienceComp = async ({
  experiences,
}: {
  experiences: PaginatedDocs<Experience>
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    })
  }

  const getDuration = (startDate: string, endDate?: string | null, isCurrent?: boolean) => {
    const start = new Date(startDate)
    const end = isCurrent ? new Date() : new Date(endDate || '')
    const diffTime = Math.abs(end.getTime() - start.getTime())
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365))
    const diffMonths = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30),
    )

    if (diffYears > 0) {
      return `${diffYears} year${diffYears > 1 ? 's' : ''}${diffMonths > 0 ? ` ${diffMonths} month${diffMonths > 1 ? 's' : ''}` : ''}`
    }
    return `${diffMonths} month${diffMonths > 1 ? 's' : ''}`
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-[var(--background-secondary)]/20 backdrop-blur-sm border border-[var(--background-secondary)]/30 rounded-full px-6 py-2 mb-6">
          <Award className="w-5 h-5 text-[var(--heading-primary)]" />
          <span className="text-sm font-medium text-[var(--heading-primary)]">
            Professional Journey
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-[var(--heading-primary)] tracking-tight mb-6">
          <ShimmeringText
            text="Experience"
            duration={2}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
            color="var(--heading-primary)"
            shimmeringColor="var(--background-secondary)"
          />
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A journey through innovation, growth, and impactful contributions across diverse
          industries
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--background-secondary)]/50 via-[var(--heading-primary)]/50 to-transparent"></div>

        <div className="space-y-12">
          {experiences.docs.map((experience: Experience, index: number) => {
            const experienceSkills = experience.skills as Skill[]
            const experienceProjects = experience.projects as Project[]
            const duration = getDuration(
              experience.startDate,
              experience.endDate,
              experience.isCurrentJob || false,
            )

            return (
              <div key={experience.id} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-6 top-8 w-4 h-4 bg-gradient-to-r from-[var(--background-secondary)] to-[var(--heading-primary)] rounded-full border-4 border-white dark:border-slate-800 shadow-lg z-10 group-hover:scale-125 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--background-secondary)] to-[var(--heading-primary)] rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Experience Card */}
                <div className="ml-8 md:ml-16">
                  <Card className="group/card relative overflow-hidden border-0 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-slate-600/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>

                    {/* Animated border */}
                    <div
                      className="absolute inset-0 border-2 border-transparent rounded-lg opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                      style={{
                        borderColor: 'rgba(148, 163, 184, 0.3)',
                      }}
                    ></div>

                    <CardHeader className="relative pb-4">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                        <div className="flex-1">
                          {/* Role and Company */}
                          <div className="mb-4">
                            <CardTitle className="text-2xl md:text-3xl font-bold text-white/90 mb-2">
                              {experience.designation}
                            </CardTitle>
                            <div className="flex items-center gap-3 text-lg font-semibold text-slate-300">
                              <Building2 className="w-5 h-5" />
                              <span>{experience.companyName}</span>
                            </div>
                          </div>

                          {/* Duration */}
                          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span className="font-medium">
                                {formatDate(experience.startDate)} -{' '}
                                {experience.isCurrentJob
                                  ? 'Present'
                                  : formatDate(experience.endDate || '')}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Zap className="w-4 h-4" />
                              <span className="font-medium">{duration}</span>
                            </div>
                          </div>
                        </div>

                        {/* Current Job Badge */}
                        {experience.isCurrentJob && (
                          <div className="flex items-center gap-2 bg-slate-600/30 border border-slate-500/40 rounded-full px-4 py-2">
                            <div className="w-2 h-2 bg-slate-300 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-slate-200">Current</span>
                          </div>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="relative space-y-6">
                      {/* Description */}
                      {experience.description && (
                        <div className="prose prose-sm dark:prose-invert max-w-none">
                          <div className="text-slate-300 leading-relaxed">
                            <RichTextHTML shouldColapse={true} data={experience.description} />
                          </div>
                        </div>
                      )}

                      {/* Skills Section */}
                      {experienceSkills && experienceSkills.length > 0 && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-slate-300" />
                            <h4 className="text-sm font-semibold text-white/90">
                              Technologies & Skills
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {experienceSkills.map((skill: Skill, skillIndex: number) => (
                              <Badge
                                key={skillIndex}
                                className="bg-gradient-to-r from-slate-600/30 to-slate-700/30 border border-slate-500/40 text-white/90 px-3 py-1.5 text-sm font-medium hover:bg-gradient-to-r hover:from-slate-500/40 hover:to-slate-600/40 transition-all duration-300"
                              >
                                {skill.name}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Projects Section */}
                      {experienceProjects && experienceProjects.length > 0 && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <ExternalLink className="w-4 h-4 text-slate-300" />
                            <h4 className="text-sm font-semibold text-white/90">Key Projects</h4>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {experienceProjects.map((project: Project, projectIndex: number) => (
                              <div
                                key={projectIndex}
                                className="group/project relative p-3 bg-gradient-to-r from-slate-600/30 to-slate-700/30 rounded-lg border border-slate-500/40 hover:border-slate-400/50 transition-all duration-300"
                              >
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                                  <span className="text-sm font-medium text-slate-200 group-hover/project:text-slate-100 transition-colors">
                                    {project.name}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            )
          })}
        </div>

        {/* Timeline End Cap */}
        <div className="absolute left-2 md:left-6 bottom-0 w-4 h-4 bg-gradient-to-r from-[var(--background-secondary)] to-[var(--heading-primary)] rounded-full border-4 border-white dark:border-slate-800 shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--background-secondary)] to-[var(--heading-primary)] rounded-full animate-pulse opacity-30"></div>
        </div>
      </div>
    </div>
  )
}

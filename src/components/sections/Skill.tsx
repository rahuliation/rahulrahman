import { PaginatedDocs } from 'payload'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SkillCategory } from '@/payload-types.js'
import { Award, Code, Zap } from 'lucide-react'
import { ShimmeringText } from '../animate-ui/text/shimmering'

export const SkillComp = async ({
  skillCategories,
}: {
  skillCategories: PaginatedDocs<SkillCategory>
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-[var(--background-secondary)]/20 backdrop-blur-sm border border-[var(--background-secondary)]/30 rounded-full px-6 py-2 mb-6">
          <Code className="w-5 h-5 text-[var(--heading-primary)]" />
          <span className="text-sm font-medium text-[var(--heading-primary)]">
            Technical Expertise
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-[var(--heading-primary)] tracking-tight mb-6">
          <ShimmeringText
            text="Skills & Technologies"
            duration={2}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
            color="var(--heading-primary)"
            shimmeringColor="var(--background-secondary)"
          />
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A comprehensive overview of the technologies, frameworks, and tools I work with
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.docs.map((category, index) => (
          <Card
            key={index}
            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 dark:bg-slate-800/80 backdrop-blur-sm"
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white/70">{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills?.map((skillItem: any, skillIndex: number) => {
                  const skill = skillItem.skill
                  if (!skill || !skill.shouldDisplay) return null

                  return (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs bg-[var(--background-secondary)] text[var(--foreground)] px-3 py-1"
                    >
                      {skill.name}
                    </Badge>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

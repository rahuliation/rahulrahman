import { PaginatedDocs } from 'payload'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SkillCategory } from '@/payload-types.js'

export const SkillComp = async ({
  skillCategories,
}: {
  skillCategories: PaginatedDocs<SkillCategory>
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-16 py-8">
      <div className="mb-8">
        <h2 className="text-4xl md:text-5xl text-center font-extrabold text-[var(--heading-primary)] tracking-tight text-balance mb-6">
          Skills & Technologies
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          A comprehensive overview of the technologies, frameworks, and tools I work with
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.docs.map((category, index) => (
          <Card
            key={index}
            className="`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 dark:bg-slate-800/80 backdrop-blur-sm"
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

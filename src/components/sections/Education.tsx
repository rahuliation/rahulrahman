import { Education } from '@/payload-types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, GraduationCap, MapPin } from 'lucide-react'
import { RichTextHTML } from '../RichTextHTML'
import { PaginatedDocs } from 'payload'

export const EducationComp = async ({ educations }: { educations: PaginatedDocs<Education> }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-16 py-8">
      <div className="mb-8">
        <h2 className="text-4xl md:text-5xl text-center font-extrabold text-[var(--heading-primary)] tracking-tight text-balance mb-6">
          Education
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          My academic background and educational achievements
        </p>
      </div>

      <div className="space-y-6">
        {educations.docs.map((education: Education) => {
          return (
            <Card
              key={education.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 dark:bg-slate-800/80 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-semibold text-white/70">
                      {education.degree}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1 text-white/50">
                      <GraduationCap className="w-4 h-4" />
                      <span>{education.institution}</span>
                    </div>
                    {education.board && (
                      <div className="flex items-center gap-2 text-muted-foreground mt-1 text-white/50">
                        <MapPin className="w-4 h-4" />
                        <span>{education.board}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Calendar className="w-4 h-4" />
                    <span>{education.yearOfPassing}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <p className="text-white/70">
                    Successfully completed {education.degree} from {education.institution} in{' '}
                    {education.yearOfPassing}
                    {education.board && ` under ${education.board}`}.
                  </p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

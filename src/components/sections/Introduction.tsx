import { Profile, Skill } from '@/payload-types'
import { Badge } from '../ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { ArrowDownButton } from '../ArrowDownButton'
import { Link } from 'react-scroll'
import { ScrollTo } from '../Section'

export const IntroductionComp = async ({ profile }: { profile: Profile }) => {
  return (
    <section className="min-h-screen px-8 py-16 w-full dd flex justify center items-center relative">
      <div className="w-full">
        {/* Hero Section */}
        <div className="text-center mb-16 w-full">
          <h1 className="text-4xl md:text-7xl py-2 mx-auto w-4/5 lg:w-2/3  font-extrabold bg-[var(--heading-primary)] text-white/80 tracking-tight text-balance mb-6">
            {profile.introTitle}
          </h1>
          <p className="text-xl md:text-2xl text-stone-900 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
            {profile.introSubtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {profile.coreSkills?.map((cskill) => (
              <Badge
                variant="outline"
                className="text-sm px-4 font-extrabold py-4 border-[var(--heading-primary)]"
              >
                {(cskill.skill as Skill)?.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 max-w-6xl mx-auto">
          {profile.introCard?.map((card) => (
            <ScrollTo key={card.id} to={card.title ?? ''} smooth={true}>
              <Card
                key={card.id}
                className={`group hover:shadow-xl cursor-pointer  py-6 transition-all duration-300 hover:-translate-y-2 border-0 bg-[var(--card)] dark:bg-slate-800/80 backdrop-blur-sm`}
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 p-1 bg-gradient-to-br bg-[var(--background-secondary)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    dangerouslySetInnerHTML={{ __html: card.icon || '' }}
                  />
                  <CardTitle className="text-xl md:xxl text-white/70">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-md font-medium text-white/80 dark:text-slate-300">
                    {card.subtitle}
                  </CardDescription>
                  <p className="hidden md:block text-sm text-white/60 dark:text-slate-400 mt-2">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollTo>
          ))}
        </div>

        {/* Arrow Down Button */}
        <div className="flex justify-center mt-16">
          <ArrowDownButton to="Skills" />
        </div>
      </div>
    </section>
  )
}

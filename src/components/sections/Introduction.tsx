import { Profile, Skill } from '@/payload-types'
import { Badge } from '../ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { ArrowDownButton } from '../ArrowDownButton'
import { Link } from 'react-scroll'
import { ScrollTo } from '../Section'
import { ClientIntroduction } from './ClientIntroduction'

// Main Introduction Component (Server Component)
export const IntroductionComp = async ({ profile }: { profile: Profile }) => {
  return (
    <section className="min-h-screen px-8 py-16 w-full flex justify-center items-center relative overflow-hidden">
      <ClientIntroduction profile={profile} />
    </section>
  )
}

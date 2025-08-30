import { Profile } from '@/payload-types'
import { ClientIntroduction } from './ClientIntroduction'

// Main Introduction Component (Server Component)
export const IntroductionComp = async ({ profile }: { profile: Profile }) => {
  return (
    <section className="min-h-screen px-8 py-16 w-full flex justify-center items-center relative overflow-hidden">
      <ClientIntroduction profile={profile} />
    </section>
  )
}

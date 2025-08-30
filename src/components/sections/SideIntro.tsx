import { Media } from '@/payload-types'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { ShimmeringText } from '../animate-ui/text/shimmering'
import { Mail, Phone, MapPin } from 'lucide-react'
import { SocialIcons } from '../SocialIcons'
import { ResumeButton } from '../ResumeButton'
import { AddToContactsButton } from '../AddToContactsButton'
import { getPayload } from 'payload'
import config from '@payload-config'
import { ArrowDownButton } from '../ArrowDownButton'

export const SideIntro = async () => {
  const payload = await getPayload({ config })

  const profile = await payload.findGlobal({
    slug: 'profile',
  })

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full flex flex-col">
        <div className="flex w-full justify-center py-4">
          <Avatar>
            <AvatarImage
              src={(profile.image as Media).url ?? ''}
              alt={(profile.image as Media).alt ?? ''}
              className="rounded-4xl w-32"
            />
            <AvatarFallback>{(profile.image as Media).alt ?? ''}</AvatarFallback>
          </Avatar>
        </div>
        <div className="text-center">
          <ShimmeringText
            text={profile.name}
            className="scroll-m-20 text-center text-5xl font-extrabold tracking-tight text-balance"
            wave
          />
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight ">
            {profile.designation}
          </h3>
        </div>

        {/* Contact Information */}
        <div className="mt-6 space-y-3 text-white/80">
          {profile.email && (
            <div className="flex items-center justify-center gap-2 text-sm">
              <Mail className="w-4 h-4" />
              <span>{profile.email}</span>
            </div>
          )}
          {profile.phone && (
            <div className="flex items-center justify-center gap-2 text-sm">
              <Phone className="w-4 h-4" />
              <span>{profile.phone}</span>
            </div>
          )}
          {profile.location && (
            <div className="flex items-center justify-center gap-2 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{profile.location}</span>
            </div>
          )}
        </div>

        <SocialIcons
          githubLink={profile.githubLink}
          linkedinLink={profile.linkedinLink}
          twitterLink={profile.twitterLink}
        />

        {/* Resume Download Button */}
        <ResumeButton cvLink={profile.cvLink} />

        {/* Add to Contacts Button - Mobile Only */}
        <AddToContactsButton
          name={profile.name}
          email={profile.email || undefined}
          phone={profile.phone || undefined}
          designation={profile.designation || undefined}
          imageUrl={(profile.image as Media).url || undefined}
        />
        <div className="flex justify-center mt-12 lg:hidden">
          <ArrowDownButton to="Intro" className="bg-[var(--sidebar)]" />
        </div>
      </div>
    </div>
  )
}

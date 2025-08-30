import { Education } from '@/payload-types'
import { PaginatedDocs } from 'payload'
import { ClientEducation } from './ClientEducation'

export const EducationComp = async ({ educations }: { educations: PaginatedDocs<Education> }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12">
      <ClientEducation educations={educations} />
    </div>
  )
}

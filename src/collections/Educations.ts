import { authenticated } from '@/access/authenticate'
import type { CollectionConfig } from 'payload'

export const Educations: CollectionConfig = {
  slug: 'educations',
  access: {
    read: () => true,
    create: authenticated,
    delete: authenticated,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'degree',
  },
  fields: [
    {
      name: 'institution',
      type: 'text',
      required: true,
    },
    {
      name: 'degree',
      type: 'text',
      required: true,
    },
    {
      name: 'board',
      type: 'text',
    },
    {
      name: 'yearOfPassing',
      type: 'number',
      required: true,
    },
  ],
}

import { authenticated } from '@/access/authenticate'
import type { CollectionConfig } from 'payload'

export const Experiences: CollectionConfig = {
  slug: 'experiences',
  access: {
    read: () => true,
    create: authenticated,
    delete: authenticated,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'companyName',
  },
  fields: [
    {
      name: 'companyName',
      type: 'text',
      required: true,
    },
    {
      name: 'designation',
      type: 'text',
      required: true,
    },
    {
      name: 'startDate',
      type: 'date',
      required: true,
    },
    {
      name: 'isCurrentJob',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'endDate',
      type: 'date',
      admin: {
        condition: (data) => !data.isCurrentJob,
      },
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },

    {
      name: 'skills',
      type: 'relationship',
      relationTo: 'skills',
      hasMany: true,
    },
    {
      name: 'projects',
      type: 'relationship',
      relationTo: 'projects',
      hasMany: true,
    },
  ],
}

import { authenticated } from '@/access/authenticate'
import type { CollectionConfig } from 'payload'

export const SkillCategories: CollectionConfig = {
  slug: 'skill-categories',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: authenticated,
    delete: authenticated,
    update: authenticated,
  },
  orderable: true,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'shouldDisplay',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'skills',
      type: 'array',
      fields: [
        {
          name: 'skill',
          type: 'relationship',
          relationTo: 'skills',
          hasMany: false,
        },
      ],
      admin: {
        components: {
          RowLabel: '@/components/admin/Label#ArrayRowLabel',
        },
      },
    },
  ],
}

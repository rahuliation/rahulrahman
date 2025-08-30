import { GlobalConfig } from 'payload'

export const Profile: GlobalConfig = {
  slug: 'profile',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'designation',
      type: 'text',
    },
    {
      name: 'coreSkills',
      type: 'array',
      fields: [
        {
          name: 'skill',
          type: 'relationship',
          relationTo: 'skills',
          hasMany: false,
        },
      ],
    },
    {
      name: 'expertise',
      type: 'text',
    },
    {
      name: 'startedWorking',
      label: 'Started Working',
      type: 'date',
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'about',
      type: 'richText',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'githubLink',
      type: 'text',
    },
    {
      name: 'linkedinLink',
      type: 'text',
    },
    {
      name: 'twitterLink',
      type: 'text',
    },
    {
      name: 'cvLink',
      type: 'text',
    },
    {
      name: 'introTitle',
      type: 'text',
    },
    { name: 'introSubtitle', type: 'text' },
    {
      name: 'introCard',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'subtitle',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'icon',
          type: 'code',
        },
      ],
    },
    {
      name: 'contactTitle',
      type: 'text',
    },
    {
      name: 'contactSubtitle',
      type: 'text',
    },
    {
      name: 'contactFor',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
        },
      ],
    },
  ],
}

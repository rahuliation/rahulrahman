import { GlobalConfig } from 'payload'

export const SEO: GlobalConfig = {
  slug: 'seo',
  fields: [
    {
      name: 'siteTitle',
      type: 'text',
      required: true,
      defaultValue: 'Rahul Rahman Portfolio',
    },
    {
      name: 'siteDescription',
      type: 'textarea',
      required: true,
      defaultValue:
        'Rahul Rahman - A MERN Stack Developer with expertise in building modern web applications',
    },
    {
      name: 'siteUrl',
      type: 'text',
      required: true,
      defaultValue: 'https://rahulrahman.com',
    },
    {
      name: 'siteName',
      type: 'text',
      required: true,
      defaultValue: 'Rahul Rahman Portfolio',
    },
    {
      name: 'siteImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Default Site Image (for social sharing)',
    },
    {
      name: 'favicon',
      type: 'upload',
      relationTo: 'media',
      label: 'Favicon',
    },
    {
      name: 'appleTouchIcon',
      type: 'upload',
      relationTo: 'media',
      label: 'Apple Touch Icon',
    },
    {
      name: 'googleAnalyticsId',
      type: 'text',
      label: 'Google Analytics ID (G-XXXXXXXXXX)',
    },
    {
      name: 'googleTagManagerId',
      type: 'text',
      label: 'Google Tag Manager ID (GTM-XXXXXXX)',
    },
    {
      name: 'googleSiteVerification',
      type: 'text',
      label: 'Google Site Verification Code',
    },
    {
      name: 'bingSiteVerification',
      type: 'text',
      label: 'Bing Site Verification Code',
    },
    {
      name: 'robotsTxt',
      type: 'textarea',
      label: 'Robots.txt Content',
      defaultValue: 'User-agent: *\nAllow: /\n\nSitemap: https://rahulrahman.com/sitemap.xml',
    },
    {
      name: 'additionalMetaTags',
      type: 'array',
      label: 'Additional Meta Tags',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Meta Name',
        },
        {
          name: 'content',
          type: 'text',
          label: 'Meta Content',
        },
      ],
    },
    {
      name: 'structuredData',
      type: 'group',
      label: 'Structured Data',
      fields: [
        {
          name: 'personSchema',
          type: 'group',
          label: 'Person Schema',
          fields: [
            {
              name: 'name',
              type: 'text',
              defaultValue: 'Rahul Rahman',
            },
            {
              name: 'jobTitle',
              type: 'text',
              defaultValue: 'MERN Stack Developer',
            },
            {
              name: 'description',
              type: 'textarea',
              defaultValue:
                'A passionate MERN Stack Developer with expertise in building modern web applications',
            },
            {
              name: 'url',
              type: 'text',
              defaultValue: 'https://rahulrahman.com',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'sameAs',
              type: 'array',
              label: 'Social Media Profiles',
              fields: [
                {
                  name: 'url',
                  type: 'text',
                  label: 'Social Media URL',
                },
              ],
            },
          ],
        },
        {
          name: 'websiteSchema',
          type: 'group',
          label: 'Website Schema',
          fields: [
            {
              name: 'name',
              type: 'text',
              defaultValue: 'Rahul Rahman Portfolio',
            },
            {
              name: 'description',
              type: 'textarea',
              defaultValue: 'Personal portfolio website showcasing projects and skills',
            },
            {
              name: 'url',
              type: 'text',
              defaultValue: 'https://rahulrahman.com',
            },
          ],
        },
      ],
    },
  ],
}

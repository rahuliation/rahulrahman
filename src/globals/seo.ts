import { GlobalConfig } from 'payload'

export const SEO: GlobalConfig = {
  slug: 'seo',
  fields: [
    {
      name: 'siteTitle',
      type: 'text',
      required: true,
      defaultValue: 'Rahul Rahman - Software Engineer | MERN Stack Developer',
    },
    {
      name: 'siteDescription',
      type: 'textarea',
      required: true,
      defaultValue:
        'Rahul Rahman is a seasoned Software Engineer based in Bangladesh, specializing in MERN (MongoDB, Express.js, React.js, Node.js) development with over 7 years of experience. Expert in Javascript, Typescript, ReactJS, NextJS, and full-stack development.',
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
              defaultValue: 'Software Engineer',
            },
            {
              name: 'description',
              type: 'textarea',
              defaultValue:
                'A seasoned Software Engineer based in Bangladesh, specializing in MERN (MongoDB, Express.js, React.js, Node.js) development with over 7 years of experience in building web and desktop applications.',
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
              defaultValue:
                'Personal portfolio website showcasing projects, skills, and experience as a Software Engineer specializing in MERN stack development',
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

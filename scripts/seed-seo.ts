import { getPayload } from 'payload'
import config from '@payload-config'

async function seedSEO() {
  const payload = await getPayload({ config })

  try {
    // Check if SEO global already exists
    const existingSEO = await payload.findGlobal({
      slug: 'seo',
    })

    if (existingSEO) {
      console.log('SEO global already exists, updating...')

      await payload.updateGlobal({
        slug: 'seo',
        data: {
          siteTitle: 'Rahul Rahman Portfolio',
          siteDescription:
            'Rahul Rahman - A MERN Stack Developer with expertise in building modern web applications',
          siteUrl: 'https://rahulrahman.com',
          siteName: 'Rahul Rahman Portfolio',
          googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID || '',
          googleTagManagerId: process.env.GOOGLE_TAG_MANAGER_ID || '',
          googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION || '',
          bingSiteVerification: process.env.BING_SITE_VERIFICATION || '',
          robotsTxt: `User-agent: *
Allow: /

Sitemap: https://rahulrahman.com/sitemap.xml`,
          additionalMetaTags: [
            {
              name: 'author',
              content: 'Rahul Rahman',
            },
            {
              name: 'keywords',
              content:
                'MERN Stack Developer, React, Node.js, MongoDB, Express, Portfolio, Web Development',
            },
            {
              name: 'theme-color',
              content: '#000000',
            },
          ],
          structuredData: {
            personSchema: {
              name: 'Rahul Rahman',
              jobTitle: 'MERN Stack Developer',
              description:
                'A passionate MERN Stack Developer with expertise in building modern web applications',
              url: 'https://rahulrahman.com',
              sameAs: [
                {
                  url: 'https://github.com/rahulrahman',
                },
                {
                  url: 'https://linkedin.com/in/rahulrahman',
                },
                {
                  url: 'https://twitter.com/rahulrahman',
                },
              ],
            },
            websiteSchema: {
              name: 'Rahul Rahman Portfolio',
              description: 'Personal portfolio website showcasing projects and skills',
              url: 'https://rahulrahman.com',
            },
          },
        },
      })
    } else {
      console.log('Creating SEO global...')

      // In newer versions of Payload, we need to use updateGlobal with upsert
      await payload.updateGlobal({
        slug: 'seo',
        data: {
          siteTitle: 'Rahul Rahman Portfolio',
          siteDescription:
            'Rahul Rahman - A MERN Stack Developer with expertise in building modern web applications',
          siteUrl: 'https://rahulrahman.com',
          siteName: 'Rahul Rahman Portfolio',
          googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID || '',
          googleTagManagerId: process.env.GOOGLE_TAG_MANAGER_ID || '',
          googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION || '',
          bingSiteVerification: process.env.BING_SITE_VERIFICATION || '',
          robotsTxt: `User-agent: *
Allow: /

Sitemap: https://rahulrahman.com/sitemap.xml`,
          additionalMetaTags: [
            {
              name: 'author',
              content: 'Rahul Rahman',
            },
            {
              name: 'keywords',
              content:
                'MERN Stack Developer, React, Node.js, MongoDB, Express, Portfolio, Web Development',
            },
            {
              name: 'theme-color',
              content: '#000000',
            },
          ],
          structuredData: {
            personSchema: {
              name: 'Rahul Rahman',
              jobTitle: 'MERN Stack Developer',
              description:
                'A passionate MERN Stack Developer with expertise in building modern web applications',
              url: 'https://rahulrahman.com',
              sameAs: [
                {
                  url: 'https://github.com/rahulrahman',
                },
                {
                  url: 'https://linkedin.com/in/rahulrahman',
                },
                {
                  url: 'https://twitter.com/rahulrahman',
                },
              ],
            },
            websiteSchema: {
              name: 'Rahul Rahman Portfolio',
              description: 'Personal portfolio website showcasing projects and skills',
              url: 'https://rahulrahman.com',
            },
          },
        },
      })
    }

    console.log('SEO global seeded successfully!')
  } catch (error) {
    console.error('Error seeding SEO global:', error)
  }

  process.exit(0)
}

seedSEO()

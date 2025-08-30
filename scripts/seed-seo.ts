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
          siteTitle: 'Rahul Rahman - Software Engineer | MERN Stack Developer',
          siteDescription:
            'Rahul Rahman is a seasoned Software Engineer based in Bangladesh, specializing in MERN (MongoDB, Express.js, React.js, Node.js) development with over 7 years of experience. Expert in Javascript, Typescript, ReactJS, NextJS, and full-stack development.',
          siteUrl: 'https://rahulrahman.com',
          siteName: 'Rahul Rahman Portfolio',
          googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID || '',
          googleTagManagerId: process.env.GOOGLE_TAG_MANAGER_ID || '',
          googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION || '',
          bingSiteVerification: process.env.BING_SITE_VERIFICATION || '',
          robotsTxt: `User-agent: *
Allow: /

# Disallow admin panel
Disallow: /admin/

# Sitemap
Sitemap: https://rahulrahman.com/sitemap.xml`,
          additionalMetaTags: [
            {
              name: 'author',
              content: 'Rahul Rahman',
            },
            {
              name: 'keywords',
              content:
                'Rahul Rahman, Software Engineer, MERN Stack Developer, Full Stack Developer, NodeJS, ReactJS, MongoDB, ExpressJS, NextJS, TypeScript, Bangladesh, Web Development, Software Development',
            },
            {
              name: 'theme-color',
              content: '#000000',
            },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
            {
              name: 'geo.region',
              content: 'BD',
            },
            {
              name: 'geo.placename',
              content: 'Dhaka, Bangladesh',
            },
            {
              name: 'language',
              content: 'English',
            },
          ],
          structuredData: {
            personSchema: {
              name: 'Rahul Rahman',
              jobTitle: 'Software Engineer',
              description:
                'A seasoned Software Engineer based in Bangladesh, specializing in MERN (MongoDB, Express.js, React.js, Node.js) development with over 7 years of experience in building web and desktop applications.',
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
              description:
                'Personal portfolio website showcasing projects, skills, and experience as a Software Engineer specializing in MERN stack development',
              url: 'https://rahulrahman.com',
            },
          },
        },
      })
    } else {
      console.log('Creating SEO global...')

      await payload.updateGlobal({
        slug: 'seo',
        data: {
          siteTitle: 'Rahul Rahman - Software Engineer | MERN Stack Developer',
          siteDescription:
            'Rahul Rahman is a seasoned Software Engineer based in Bangladesh, specializing in MERN (MongoDB, Express.js, React.js, Node.js) development with over 7 years of experience. Expert in Javascript, Typescript, ReactJS, NextJS, and full-stack development.',
          siteUrl: 'https://rahulrahman.com',
          siteName: 'Rahul Rahman Portfolio',
          googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID || '',
          googleTagManagerId: process.env.GOOGLE_TAG_MANAGER_ID || '',
          googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION || '',
          bingSiteVerification: process.env.BING_SITE_VERIFICATION || '',
          robotsTxt: `User-agent: *
Allow: /

# Disallow admin panel
Disallow: /admin/

# Sitemap
Sitemap: https://rahulrahman.com/sitemap.xml`,
          additionalMetaTags: [
            {
              name: 'author',
              content: 'Rahul Rahman',
            },
            {
              name: 'keywords',
              content:
                'Rahul Rahman, Software Engineer, MERN Stack Developer, Full Stack Developer, NodeJS, ReactJS, MongoDB, ExpressJS, NextJS, TypeScript, Bangladesh, Web Development, Software Development',
            },
            {
              name: 'theme-color',
              content: '#000000',
            },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
            {
              name: 'geo.region',
              content: 'BD',
            },
            {
              name: 'geo.placename',
              content: 'Dhaka, Bangladesh',
            },
            {
              name: 'language',
              content: 'English',
            },
          ],
          structuredData: {
            personSchema: {
              name: 'Rahul Rahman',
              jobTitle: 'Software Engineer',
              description:
                'A seasoned Software Engineer based in Bangladesh, specializing in MERN (MongoDB, Express.js, React.js, Node.js) development with over 7 years of experience in building web and desktop applications.',
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
              description:
                'Personal portfolio website showcasing projects, skills, and experience as a Software Engineer specializing in MERN stack development',
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

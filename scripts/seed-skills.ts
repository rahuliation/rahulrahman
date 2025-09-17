#!/usr/bin/env tsx

import { getPayload } from 'payload'
import config from '../src/payload.config.js'

interface SkillCategoryData {
  name: string
  shouldDisplay: boolean
  sortIndex: number
  skills: string[]
}

const skillCategoriesData: SkillCategoryData[] = [
  {
    name: 'Programming Languages',
    shouldDisplay: true,
    sortIndex: 1,
    skills: ['Javascript', 'Typescript', 'NodeJS', 'Ruby', 'PHP'],
  },
  {
    name: 'Frameworks',
    shouldDisplay: true,
    sortIndex: 2,
    skills: [
      'ExpressJS',
      'NestJS',
      'ReactJS',
      'NextJS',
      'RemixJS',
      'Ruby on Rails',
      'Laravel',
      'FeathersJS',
    ],
  },
  {
    name: 'Database and Storage',
    shouldDisplay: true,
    sortIndex: 3,
    skills: [
      'MongoDB',
      'Redis',
      'MySQL',
      'PostgreSQL',
      'Firestore',
      'DynamoDB',
      'TypeORM',
      'Prisma',
      'Mongoose',
    ],
  },
  {
    name: 'API & Communication',
    shouldDisplay: true,
    sortIndex: 4,
    skills: [
      'RESTful API',
      'GraphQL',
      'Apollo GraphQL',
      'Socket.IO',
      'WebSocket Subscription',
      'Type-GraphQL',
      'Dataloader',
    ],
  },
  {
    name: 'State Management & Data',
    shouldDisplay: true,
    sortIndex: 5,
    skills: ['Redux Toolkit', 'MobX', 'MobX State Tree', 'RTK Query', 'AgendaJob'],
  },
  {
    name: 'Tools & Utilities',
    shouldDisplay: true,
    sortIndex: 6,
    skills: ['Curl', 'Fetch API', 'Aria2', 'Request Tools', 'Data Scraping', 'JSON', 'XML', 'YAML'],
  },
  {
    name: 'Cloud & DevOps',
    shouldDisplay: true,
    sortIndex: 7,
    skills: [
      'AWS EC2',
      'AWS IAM',
      'AWS SES',
      'AWS S3',
      'Digital Ocean',
      'Firebase Functions',
      'Docker',
      'Docker Compose',
      'Git',
      'Trello',
      'Slack',
    ],
  },
  {
    name: 'Third Party APIs',
    shouldDisplay: true,
    sortIndex: 8,
    skills: [
      'Google Maps',
      'Distance Matrix API',
      'Place API',
      'Direction API',
      'Mapbox',
      'OpenStreet API',
      'SSL E-commerce',
      'AliPay',
      'Stripe',
      'YouTube Data API',
      'Firebase Push Notification',
    ],
  },
  {
    name: 'Development Tools',
    shouldDisplay: true,
    sortIndex: 9,
    skills: ['Visual Studio Code', 'ESLint', 'Chrome Dev Tools', 'Atlas Search'],
  },
  {
    name: 'Operating Systems',
    shouldDisplay: true,
    sortIndex: 10,
    skills: ['Deepin', 'Fedora', 'CentOS', 'Ubuntu', 'OpenSUSE'],
  },
  {
    name: 'Software Engineering',
    shouldDisplay: true,
    sortIndex: 11,
    skills: ['Object-Oriented Programming', 'Object-Oriented Design'],
  },
]

async function seedSkills(): Promise<void> {
  console.log('🌱 Starting skills seeding...')

  try {
    // Initialize payload with the config
    const payload = await getPayload({ config })

    // First, truncate existing data
    console.log('🗑️  Clearing existing data...')

    // Delete all skill categories first (to avoid foreign key constraints)
    const existingCategories = await payload.find({
      collection: 'skill-categories',
      limit: 1000,
    })

    for (const category of existingCategories.docs) {
      await payload.delete({
        collection: 'skill-categories',
        id: category.id,
      })
      console.log(`🗑️  Deleted category: ${category.name}`)
    }

    // Delete all skills
    const existingSkills = await payload.find({
      collection: 'skills',
      limit: 1000,
    })

    for (const skill of existingSkills.docs) {
      await payload.delete({
        collection: 'skills',
        id: skill.id,
      })
      console.log(`🗑️  Deleted skill: ${skill.name}`)
    }

    console.log('✅ Data cleared successfully!')

    // Now create all skills
    const createdSkills = new Map<string, number>()

    for (const category of skillCategoriesData) {
      for (const skillName of category.skills) {
        if (!createdSkills.has(skillName)) {
          try {
            const skill = await payload.create({
              collection: 'skills',
              data: {
                name: skillName,
                shouldDisplay: true,
              },
            })
            createdSkills.set(skillName, skill.id)
            console.log(`✅ Created skill: ${skillName}`)
          } catch (error) {
            console.error(`❌ Failed to create skill: ${skillName}`, error)
          }
        }
      }
    }

    // Then create skill categories with relationships
    for (const categoryData of skillCategoriesData) {
      try {
        const skillRelationships = categoryData.skills
          .map((skillName) => createdSkills.get(skillName))
          .filter((skillId): skillId is number => Boolean(skillId))
          .map((skillId) => ({ skill: skillId }))

        await payload.create({
          collection: 'skill-categories',
          data: {
            name: categoryData.name,
            shouldDisplay: categoryData.shouldDisplay,
            skills: skillRelationships,
          },
        })
        console.log(
          `✅ Created category: ${categoryData.name} (sortIndex: ${categoryData.sortIndex})`,
        )
      } catch (error) {
        console.error(`❌ Failed to create category: ${categoryData.name}`, error)
      }
    }

    console.log('🎉 Skills seeding completed!')
  } catch (error) {
    console.error('❌ Error during seeding:', error)
  }
}

// Run the seed
seedSkills()
  .then(() => {
    console.log('✅ Script completed successfully!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('❌ Script failed:', error)
    process.exit(1)
  })

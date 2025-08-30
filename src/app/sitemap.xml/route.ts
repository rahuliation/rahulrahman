import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function GET(request: NextRequest) {
  try {
    const payload = await getPayload({ config })
    const seo = await payload.findGlobal({
      slug: 'seo',
    })

    // Fetch all projects for sitemap
    const projects = await payload.find({
      collection: 'projects',
      limit: 1000,
    })

    // Fetch all experiences for sitemap
    const experiences = await payload.find({
      collection: 'experiences',
      limit: 1000,
    })

    // Fetch all educations for sitemap
    const educations = await payload.find({
      collection: 'educations',
      limit: 1000,
    })

    const baseUrl = seo.siteUrl || 'https://rahulrahman.com'
    const currentDate = new Date().toISOString()

    // Generate sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Projects -->
  ${projects.docs
    .map(
      (project: any) => `
  <url>
    <loc>${baseUrl}/#projects</loc>
    <lastmod>${project.updatedAt || currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  `,
    )
    .join('')}

  <!-- Experiences -->
  ${experiences.docs
    .map(
      (experience: any) => `
  <url>
    <loc>${baseUrl}/#experience</loc>
    <lastmod>${experience.updatedAt || currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  `,
    )
    .join('')}

  <!-- Education -->
  ${educations.docs
    .map(
      (education: any) => `
  <url>
    <loc>${baseUrl}/#education</loc>
    <lastmod>${education.updatedAt || currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>
  `,
    )
    .join('')}

  <!-- Skills -->
  <url>
    <loc>${baseUrl}/#skills</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Contact -->
  <url>
    <loc>${baseUrl}/#contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`

    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    })
  } catch (error) {
    console.error('Error generating sitemap:', error)

    // Fallback sitemap
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://rahulrahman.com</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`

    return new NextResponse(fallbackSitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    })
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function GET(request: NextRequest) {
  try {
    const payload = await getPayload({ config })
    const seo = await payload.findGlobal({
      slug: 'seo',
    })

    const robotsContent =
      seo.robotsTxt ||
      `User-agent: *
Allow: /

Sitemap: ${seo.siteUrl}/sitemap.xml`

    return new NextResponse(robotsContent, {
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  } catch (error) {
    console.error('Error generating robots.txt:', error)

    // Fallback robots.txt
    const fallbackContent = `User-agent: *
Allow: /

Sitemap: https://rahulrahman.com/sitemap.xml`

    return new NextResponse(fallbackContent, {
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  }
}

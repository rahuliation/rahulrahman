import React from 'react'
import './styles.css'
import { SideIntro } from '@/components/sections/SideIntro'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { generateMetadata as generateSEOMetadata } from '@/components/SEOHead'

export async function generateMetadata(): Promise<Metadata> {
  try {
    const payload = await getPayload({ config })
    const seo = await payload.findGlobal({
      slug: 'seo',
    })

    return generateSEOMetadata(seo)
  } catch (error) {
    console.error('Error fetching SEO data:', error)
    return {
      title: 'Rahul Rahman Portfolio',
      description: 'Rahul Rahman - A MERN Stack Developer',
    }
  }
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html lang="en">
      <body className="flex w-full flex-col md:flex-row">
        <aside className="w-full fixed lg:w-1/4 h-dvh lg:h-screen bg-[var(--sidebar)] text-[var(--sidebar-foreground)]">
          <SideIntro />
        </aside>
        <main className="h-full w-full mt-[100dvh] lg:mt-0 ml-0 lg:ml-[25%] z-10">{children}</main>
      </body>
    </html>
  )
}

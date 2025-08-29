import React from 'react'
import './styles.css'
import { SideIntro } from '@/components/sections/SideIntro'
import { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'Rahul Rahman , A  Mern Developer',
  title: 'Rahul Rahman Portfolio',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html lang="en">
      <body className="flex w-full flex-col lg:flex-row">
        <aside className="w-full fixed lg:w-1/4 h-dvh lg:h-screen bg-[var(--sidebar)] text-[var(--sidebar-foreground)]">
          <SideIntro />
        </aside>
        <main className="h-full mt-[100dvh] lg:mt-0 ml-0 lg:ml-[25%] z-10">{children}</main>
      </body>
    </html>
  )
}

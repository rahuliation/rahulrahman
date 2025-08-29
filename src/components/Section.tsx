'use client'
import { Element, Link } from 'react-scroll'

const Section = ({ name, children }: { name: string; children: React.ReactNode }) => {
  return (
    <Element name={name} className="w-full min-h-screen">
      {children}
    </Element>
  )
}

export default Section

export const ScrollTo = ({
  to,
  smooth,
  children,
}: {
  to: string
  smooth: boolean
  children: React.ReactNode
}) => {
  return (
    <Link to={to} smooth={smooth}>
      {children}
    </Link>
  )
}

'use client'

import { useState } from 'react'
import { createContact } from './actions'
import { Input } from '@/components/ui/input'
import { CardContent, CardDescription, CardHeader, CardTitle, Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Profile } from '@/payload-types'

export const ContactComp = ({ profile }: { profile: Profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const result = await createContact(formData)

      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-[var(--card)] min-h-screen px-8 py-16 w-full flex justify-center items-center relative">
      <div className="w-full max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl py-2 font-extrabold bg-[var(--sidebar-foreground)] text-[var(--heading-primary)] tracking-tight text-balance mb-6">
            {profile.contactTitle}
          </h2>
          <p className="text-xl md:text-2xl text-white/80 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
            {profile.contactSubtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {profile.contactFor?.map((reason) => (
              <Badge variant="outline" className="text-sm text-white/70 px-4 py-4">
                {reason.label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <Card className="border-2 dark:bg-slate-800/80 backdrop-blur-sm border-[var(--background)]">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white/70">Send me a message</CardTitle>
            <CardDescription className="text-lg text-white/60 dark:text-slate-400">
              I'll get back to you as soon as possible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[var(--heading-primary)] focus:ring-[var(--heading-primary)]"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[var(--heading-primary)] focus:ring-[var(--heading-primary)]"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[var(--heading-primary)] focus:ring-[var(--heading-primary)]"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white placeholder:text-white/50 focus:border-[var(--heading-primary)] focus:ring-[var(--heading-primary)] focus:outline-none resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-md">
                  <p className="text-green-400 text-center">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-md">
                  <p className="text-red-400 text-center">
                    Something went wrong. Please try again.
                  </p>
                </div>
              )}

              <div className="text-center cursor-pointer">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer bg-[var(--background)] text-[var(--heading-primary)] px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
      </div>
    </section>
  )
}

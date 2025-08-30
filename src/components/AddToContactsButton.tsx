'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { UserPlus, Check } from 'lucide-react'
import { useIsMobile } from '@/hooks/use-mobile'

interface AddToContactsButtonProps {
  name?: string
  email?: string
  phone?: string
  designation?: string
  imageUrl?: string
}

export const AddToContactsButton = ({
  name,
  email,
  phone,
  designation,
  imageUrl,
}: AddToContactsButtonProps) => {
  const [isAdded, setIsAdded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const isMobile = useIsMobile()

  // Only show on mobile devices
  if (!isMobile) return null

  const handleAddToContacts = async () => {
    if (!name) return

    setIsLoading(true)

    try {
      // Check if Contacts API is supported
      if ('contacts' in navigator && 'select' in (navigator as any).contacts) {
        const contact = {
          name: [name],
          email: email ? [email] : undefined,
          tel: phone ? [phone] : undefined,
          title: designation ? [designation] : undefined,
          icon: imageUrl ? [imageUrl] : undefined,
        }

        // Remove undefined properties
        Object.keys(contact).forEach((key) => {
          if (contact[key as keyof typeof contact] === undefined) {
            delete contact[key as keyof typeof contact]
          }
        })

        await (navigator as any).contacts.select(['name', 'email', 'tel', 'icon'], {
          multiple: false,
        })
        setIsAdded(true)

        // Reset after 3 seconds
        setTimeout(() => setIsAdded(false), 3000)
      } else {
        // Fallback for browsers that don't support Contacts API
        const vCard = [
          'BEGIN:VCARD',
          'VERSION:3.0',
          `FN:${name}`,
          ...(email ? [`EMAIL:${email}`] : []),
          ...(phone ? [`TEL:${phone}`] : []),
          ...(designation ? [`TITLE:${designation}`] : []),
          ...(imageUrl ? [`PHOTO;VALUE=URI:${imageUrl}`] : []),
          'END:VCARD',
        ].join('\n')

        const blob = new Blob([vCard], { type: 'text/vcard' })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `${name.replace(/\s+/g, '_')}.vcf`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)

        setIsAdded(true)
        setTimeout(() => setIsAdded(false), 3000)
      }
    } catch (error) {
      console.error('Error adding to contacts:', error)
      // Fallback to vCard download
      const vCard = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `FN:${name}`,
        ...(email ? [`EMAIL:${email}`] : []),
        ...(phone ? [`TEL:${phone}`] : []),
        ...(designation ? [`TITLE:${designation}`] : []),
        ...(imageUrl ? [`PHOTO;VALUE=URI:${imageUrl}`] : []),
        'END:VCARD',
      ].join('\n')

      const blob = new Blob([vCard], { type: 'text/vcard' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `${name.replace(/\s+/g, '_')}.vcf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      setIsAdded(true)
      setTimeout(() => setIsAdded(false), 3000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex justify-center mt-4">
      <Button
        variant="outline"
        size="sm"
        onClick={handleAddToContacts}
        disabled={isLoading || !name}
        className="gap-2 bg-[var(--sidebar)] text-white/80"
      >
        {isAdded ? (
          <>
            <Check className="w-4 h-4" />
            Added to Contacts
          </>
        ) : (
          <>
            <UserPlus className="w-4 h-4" />
            Add to Contacts
          </>
        )}
      </Button>
    </div>
  )
}

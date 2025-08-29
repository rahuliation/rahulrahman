'use server'

import { getPayload } from 'payload'
import config from '@payload-config'
import { revalidatePath } from 'next/cache'

interface ContactData {
  name: string
  email: string
  phone?: string
  message?: string
}

export async function createContact(data: ContactData) {
  try {
    const payload = await getPayload({ config })

    const contact = await payload.create({
      collection: 'contacts',
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        message: data.message || '',
      },
    })

    // Revalidate the page to show fresh data
    revalidatePath('/')

    return { success: true, data: contact }
  } catch (error) {
    console.error('Error creating contact:', error)
    return { success: false, error: 'Failed to create contact' }
  }
}

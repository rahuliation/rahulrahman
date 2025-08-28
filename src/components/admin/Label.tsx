'use client'

import { useRowLabel } from '@payloadcms/ui'

export const ArrayRowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ name?: string }>()

  console.log(JSON.stringify(data))
  const customLabel = `${data.name || 'Skill'} ${String(rowNumber).padStart(2, '0')} `

  return <div>{customLabel}</div>
}

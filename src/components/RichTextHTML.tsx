'use client'

import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html'

import React, { useState } from 'react'

export const RichTextHTML = ({
  data,
  shouldColapse = false,
}: {
  data: SerializedEditorState
  shouldColapse?: boolean
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const html = convertLexicalToHTML({ data })

  if (!shouldColapse) {
    return <div dangerouslySetInnerHTML={{ __html: html }} />
  }

  // If shouldColapse is true, implement see more functionality
  const maxLength = 200 // Adjust this value as needed
  const isLongContent = html.length > maxLength

  if (!isLongContent) {
    return <div dangerouslySetInnerHTML={{ __html: html }} />
  }

  const truncatedHtml = isExpanded ? html : html.substring(0, maxLength) + '...'

  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: truncatedHtml }} />
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="text-white/80 hover:text-white underline text-sm mt-2"
        >
          See more
        </button>
      )}
    </div>
  )
}

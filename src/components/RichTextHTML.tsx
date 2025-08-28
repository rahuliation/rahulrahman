'use client'

import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html'

import React from 'react'

export const RichTextHTML = ({ data }: { data: SerializedEditorState }) => {
  const html = convertLexicalToHTML({ data })

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

import React from 'react'
import { Metadata } from 'next'
import { Seo as SEOType } from '@/payload-types'

interface SEOHeadProps {
  seo: SEOType
  pageTitle?: string
  pageDescription?: string
  pageImage?: string
  pageUrl?: string
  noIndex?: boolean
}

export const generateMetadata = (
  seo: SEOType,
  pageProps?: {
    title?: string
    description?: string
    image?: string
    url?: string
    noIndex?: boolean
  },
): Metadata => {
  const title = pageProps?.title || seo.siteTitle
  const description = pageProps?.description || seo.siteDescription
  const image =
    pageProps?.image || (typeof seo.siteImage === 'object' && seo.siteImage?.url) || '/desktop.png'
  const url = pageProps?.url || seo.siteUrl

  const metadata: Metadata = {
    title,
    description,
    metadataBase: new URL(seo.siteUrl),
    robots: {
      index: !pageProps?.noIndex,
      follow: !pageProps?.noIndex,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: seo.siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    icons: {
      icon: (typeof seo.favicon === 'object' && seo.favicon?.url) || '/favicon.ico',
      apple:
        (typeof seo.appleTouchIcon === 'object' && seo.appleTouchIcon?.url) ||
        '/apple-touch-icon.png',
    },
    verification: {
      google: seo.googleSiteVerification || undefined,
      other: seo.bingSiteVerification
        ? {
            'msvalidate.01': seo.bingSiteVerification,
          }
        : undefined,
    },
  }

  // Add additional meta tags
  if (seo.additionalMetaTags) {
    metadata.other = {}
    seo.additionalMetaTags.forEach((tag: any) => {
      if (tag.name && tag.content) {
        metadata.other![tag.name] = tag.content
      }
    })
  }

  return metadata
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  seo,
  pageTitle,
  pageDescription,
  pageImage,
  pageUrl,
  noIndex,
}) => {
  const title = pageTitle || seo.siteTitle
  const description = pageDescription || seo.siteDescription
  const image = pageImage || seo.siteImage?.url || '/desktop.png'
  const url = pageUrl || seo.siteUrl

  // Generate structured data
  const generateStructuredData = () => {
    const structuredData = []

    // Person Schema
    if (seo.structuredData?.personSchema) {
      const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: seo.structuredData.personSchema.name,
        jobTitle: seo.structuredData.personSchema.jobTitle,
        description: seo.structuredData.personSchema.description,
        url: seo.structuredData.personSchema.url,
        image:
          typeof seo.structuredData.personSchema.image === 'object'
            ? (seo.structuredData.personSchema.image as any)?.url
            : undefined,
        sameAs:
          seo.structuredData.personSchema.sameAs
            ?.map((profile: any) => profile.url)
            .filter(Boolean) || [],
      }
      structuredData.push(personSchema)
    }

    // Website Schema
    if (seo.structuredData?.websiteSchema) {
      const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: seo.structuredData.websiteSchema.name,
        description: seo.structuredData.websiteSchema.description,
        url: seo.structuredData.websiteSchema.url,
      }
      structuredData.push(websiteSchema)
    }

    return structuredData
  }

  const structuredData = generateStructuredData()

  return (
    <>
      {/* Google Analytics */}
      {seo.googleAnalyticsId && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${seo.googleAnalyticsId}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${seo.googleAnalyticsId}');
              `,
            }}
          />
        </>
      )}

      {/* Google Tag Manager */}
      {seo.googleTagManagerId && (
        <>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${seo.googleTagManagerId}');
              `,
            }}
          />
        </>
      )}

      {/* Structured Data */}
      {structuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data),
          }}
        />
      ))}

      {/* Additional Meta Tags */}
      {seo.additionalMetaTags?.map((tag: any, index: number) => (
        <meta key={index} name={tag.name || ''} content={tag.content || ''} />
      ))}
    </>
  )
}

import type { SanityImageSource } from '@sanity/image-url'
import type { TypedObject } from 'astro-portabletext/types'
import { sanityClient } from './sanity'

type Locale = 'de' | 'en'

type FeaturedMedia = SanityImageSource & { alt_text?: string }

export type NewsCategory = { name: string; slug: string }

export type NewsSummary = {
    _id: string
    title: string
    slug: string
    date: string
    excerpt?: string
    featured_media?: FeaturedMedia
    categories?: NewsCategory[]
}

export type NewsPost = NewsSummary & {
    content?: TypedObject[]
    // Slugs of this post in other languages, linked by the document-internationalization plugin
    translations?: { language: Locale; slug: string }[]
}

const summaryFields = `_id, title, "slug": slug.current, date, excerpt, featured_media,
    "categories": categories[]->{ name, "slug": slug.current }`

export function getNewsSummaries(locale: Locale) {
    return sanityClient.fetch<NewsSummary[]>(
        `*[_type == "post" && language == $locale && defined(slug.current)] | order(date desc) { ${summaryFields} }`,
        { locale },
    )
}

export function getNewsPosts(locale: Locale) {
    return sanityClient.fetch<NewsPost[]>(
        `*[_type == "post" && language == $locale && defined(slug.current)] {
            ${summaryFields},
            content,
            "translations": *[_type == "translation.metadata" && references(^._id)][0].translations[]
                .value->{ language, "slug": slug.current }
        }`,
        { locale },
    )
}

export function formatNewsDate(date: string, locale: string) {
    return new Intl.DateTimeFormat(locale === 'en' ? 'en-GB' : 'de-DE', { dateStyle: 'long' }).format(new Date(date))
}

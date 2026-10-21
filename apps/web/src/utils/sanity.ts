import { createClient } from '@sanity/client'
import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url'

// Same project as apps/studio. The site is built statically, so we read published content without the CDN.
export const sanityClient = createClient({
    projectId: '11ia7wu4',
    dataset: 'production',
    apiVersion: '2026-10-01',
    useCdn: false,
})

const imageBuilder = createImageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
    return imageBuilder.image(source).auto('format')
}

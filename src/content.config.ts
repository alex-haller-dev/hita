import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

// One entry per locale and year, e.g. de/2020.md. Years with a markdown body get their own detail page.
const annualReports = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/annual-reports' }),
    schema: z.object({
        year: z.number(),
        highlights: z.array(z.string()),
        pdf: z.string().optional(),
    }),
})

export const collections = { annualReports }

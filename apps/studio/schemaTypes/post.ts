import {defineArrayMember, defineField, defineType} from 'sanity'

// Mirrors the WordPress `post` type (wp-json/wp/v2/posts). Field names match the WordPress
// fields so the content migration can map them 1:1.
export const postType = defineType({
  name: 'post',
  title: 'News',
  type: 'document',
  fields: [
    defineField({name: 'language', type: 'string', readOnly: true, hidden: true}),
    defineField({name: 'title', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featured_media',
      title: 'Featured image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt_text', title: 'Alternative text', type: 'string'})],
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      rows: 3,
      description: 'Short teaser shown in the news overview.',
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [
        defineArrayMember({type: 'block'}),
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({name: 'alt_text', title: 'Alternative text', type: 'string'}),
            defineField({name: 'caption', type: 'string'}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'category'}]})],
    }),
  ],
  orderings: [{title: 'Date, newest first', name: 'dateDesc', by: [{field: 'date', direction: 'desc'}]}],
  preview: {
    select: {title: 'title', date: 'date', language: 'language', media: 'featured_media'},
    prepare: ({title, date, language, media}) => ({
      title,
      subtitle: [language?.toUpperCase(), date?.slice(0, 10)].filter(Boolean).join(' · '),
      media,
    }),
  },
})

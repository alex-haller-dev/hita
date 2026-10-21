import {defineField, defineType} from 'sanity'

// Mirrors the WordPress `category` taxonomy (wp-json/wp/v2/categories)
export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({name: 'language', type: 'string', readOnly: true, hidden: true}),
    defineField({name: 'name', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {select: {title: 'name', subtitle: 'language'}},
})

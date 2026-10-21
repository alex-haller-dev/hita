import {defineConfig, type Template} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {documentInternationalization} from '@sanity/document-internationalization'
import {schemaTypes} from './schemaTypes'

// One document per language, like WPML on the old site. German is the base language.
const LOCALIZED_TYPES = ['post', 'category']
const BASE_LANGUAGE = 'de'

export default defineConfig({
  name: 'default',
  title: 'Hita',

  projectId: '11ia7wu4',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [
        {id: 'de', title: 'Deutsch'},
        {id: 'en', title: 'English'},
      ],
      schemaTypes: LOCALIZED_TYPES,
    }),
  ],

  document: {
    // Replace the default "new document" entries so new documents always get a language
    newDocumentOptions: (prev) => [
      ...prev.filter((item) => !LOCALIZED_TYPES.includes(item.templateId)),
      ...LOCALIZED_TYPES.map((schemaType) => ({
        templateId: `${schemaType}-${BASE_LANGUAGE}`,
        parameters: {language: BASE_LANGUAGE},
      })),
    ],
  },

  schema: {
    types: schemaTypes,
    templates: (prev): Template[] => [
      ...prev,
      ...LOCALIZED_TYPES.map((schemaType) => ({
        id: `${schemaType}-${BASE_LANGUAGE}`,
        title: `${schemaType} (${BASE_LANGUAGE})`,
        schemaType,
        parameters: [{name: 'language', type: 'string'}],
        value: ({language}: {language: string}) => ({language}),
      })),
    ],
  },
})

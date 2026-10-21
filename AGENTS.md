## Repository structure

This is an npm workspaces monorepo. Install dependencies once from the repo root with `npm install`.

- `apps/web` (`@hita/web`): the Astro website
- `apps/studio` (`@hita/studio`): the Sanity Studio (CMS)

Run workspace commands from the root, e.g. `npm run dev`, `npm run dev:studio`, `npm run build`, or target a
workspace directly with `npm run <script> --workspace=@hita/web`. Add dependencies to the workspace that uses them
(`npm install <pkg> --workspace=@hita/studio`), not to the root.

## Development

When starting the Astro dev server, use background mode from `apps/web`:

```
cd apps/web && npx astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Start the Sanity Studio with `npm run dev:studio`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)


## About the project
We are building a new website for hita. The current website can be viewed here: http://hita-ev.org/

The initial goal of the project is to replicate the content of the original page, but with a new more modern feel.

We should ultimately include all the content of the original page, but we can restructure the menus, pages
and of course the styling.

When you are instructed to build something, make sure you always check the existing equivalent on http://hita-ev.org/
so you understand how this was implemented originally.

## Styling
We need to make sure styling is consistent across all the components.

Make sure to always use tailwind for your styling.

## File naming
For astro files, use lower case and dashes to name the file.

For ts files use lower case and `.` notation for multi name files.

## Mobile support
Make sure the website is optimised for both PC use and for mobile use.

## Translations
When you implement a new page make sure you always add german and english translations. If the layout of the page
changes because of the language, you can use the en/ subfolder to implement a new component. If just the page itself
changes then you can add the translations to the translation.ts file.

## When to use pages and when components
Pages are generally everything that has a URL attached to it. We have english and german pages as of now.

If a page is just text we can implement the EN and DE page completely separately.
If a page has styling and more complex components worth sharing we should use shared components.

When we use shared components, we need to make sure that we use the translation file to display the correct
text dynamically.

If the page needs to look different because of the language (this is rare) we can implement the language specific
implementation on the page itself without a shared component.
# HITA e.V. website

npm workspaces monorepo for the new hita-ev.org.

| Workspace | Path | Description |
| :-- | :-- | :-- |
| `@hita/web` | `apps/web` | Astro website |
| `@hita/studio` | `apps/studio` | Sanity Studio (CMS) |

## Commands

Run from the repo root:

| Command | Action |
| :-- | :-- |
| `npm install` | Installs dependencies for all workspaces |
| `npm run dev` | Starts the website at `localhost:4321` |
| `npm run dev:studio` | Starts the Sanity Studio at `localhost:3333` |
| `npm run build` | Builds all workspaces |
| `npm run build:web` / `npm run build:studio` | Builds a single workspace |
| `npm run deploy:studio` | Deploys the Studio to Sanity hosting |

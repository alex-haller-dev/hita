import {migrateNews} from './news'
import {migrateProjects} from './projects'

console.log('Starting migration...')
console.log('Migrating news...')

const newsMigrated = await migrateNews()

console.log(`Successfully migrated ${newsMigrated.length} news`)

console.log('Migrating projects...')

await migrateProjects()
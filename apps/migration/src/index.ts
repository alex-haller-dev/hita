import {migrateNews} from './news';
import {migrateProjects} from './projects';

console.log('Starting migration...');
console.log('Migrating news...')

await migrateNews()

console.log('Migrating projects...')

await migrateProjects()
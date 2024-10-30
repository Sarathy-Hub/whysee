import { type SchemaTypeDefinition } from 'sanity'
import { founder } from './founder'
import { startup } from './startup'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [founder, startup],
}

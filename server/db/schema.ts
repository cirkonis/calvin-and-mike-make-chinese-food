import { pgTable, text, boolean } from 'drizzle-orm/pg-core'

export const checkboxes = pgTable('checkboxes', {
  key: text('key').primaryKey(),
  checked: boolean('checked').notNull().default(false),
})

export type Checkbox = typeof checkboxes.$inferSelect

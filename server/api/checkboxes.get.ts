import { useDb, schema } from '../db'

export default defineEventHandler(async () => {
  try {
    const db = useDb()
    const rows = await db.select().from(schema.checkboxes)
    return Object.fromEntries(rows.map(r => [r.key, r.checked]))
  } catch {
    return {}
  }
})

import { useDb, schema } from '../db'

export default defineEventHandler(async (event) => {
  const body = await readBody<{ key: string; checked: boolean }>(event)
  try {
    const db = useDb()
    await db
      .insert(schema.checkboxes)
      .values({ key: body.key, checked: body.checked })
      .onConflictDoUpdate({
        target: schema.checkboxes.key,
        set: { checked: body.checked },
      })
  } catch {
    // graceful degradation if DB not configured
  }
  return { ok: true }
})

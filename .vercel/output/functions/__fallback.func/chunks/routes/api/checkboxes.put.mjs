import { d as defineEventHandler, r as readBody } from '../../nitro/nitro.mjs';
import { u as useDb, c as checkboxes } from '../../_/index.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@neondatabase/serverless';
import 'drizzle-orm/neon-http';
import 'drizzle-orm/pg-core';

const checkboxes_put = defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    const db = useDb();
    await db.insert(checkboxes).values({ key: body.key, checked: body.checked }).onConflictDoUpdate({
      target: checkboxes.key,
      set: { checked: body.checked }
    });
  } catch {
  }
  return { ok: true };
});

export { checkboxes_put as default };
//# sourceMappingURL=checkboxes.put.mjs.map

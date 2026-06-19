import { d as defineEventHandler } from '../../nitro/nitro.mjs';
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

const checkboxes_get = defineEventHandler(async () => {
  try {
    const db = useDb();
    const rows = await db.select().from(checkboxes);
    return Object.fromEntries(rows.map((r) => [r.key, r.checked]));
  } catch {
    return {};
  }
});

export { checkboxes_get as default };
//# sourceMappingURL=checkboxes.get.mjs.map

import { c as createError } from '../nitro/nitro.mjs';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { pgTable, boolean, text } from 'drizzle-orm/pg-core';

const checkboxes = pgTable("checkboxes", {
  key: text("key").primaryKey(),
  checked: boolean("checked").notNull().default(false)
});

const schema = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  checkboxes: checkboxes
}, Symbol.toStringTag, { value: 'Module' }));

let cached = null;
function useDb() {
  if (cached) return cached;
  const url = process.env.POSTGRES_URL;
  if (!url) {
    throw createError({ statusCode: 500, statusMessage: "POSTGRES_URL is not configured" });
  }
  const sql = neon(url);
  cached = drizzle(sql, { schema });
  return cached;
}

export { checkboxes as c, useDb as u };
//# sourceMappingURL=index.mjs.map

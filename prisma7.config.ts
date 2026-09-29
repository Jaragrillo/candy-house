import "dotenv/config";
import { defineConfig, env } from "prisma/config";

// The CLI (generate/migrate/studio) connects directly, bypassing pgbouncer,
// since migrations need advisory locks that Neon's pooled connection doesn't support.
// The app itself connects through the pooled URL via the pg driver adapter (see lib/prisma.ts).
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL_UNPOOLED"),
  },
});

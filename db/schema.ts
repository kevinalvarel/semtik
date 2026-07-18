import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const registration = pgTable("peserta_semtik", {
  nim: integer("nim").primaryKey().unique(),
  email: varchar("email", { length: 100 }).notNull(),
  nama: varchar("nama", { length: 100 }).notNull(),
  fakultas: varchar("fakultas", { length: 100 }).notNull(),
  prodi: varchar("prodi", { length: 100 }).notNull(),
});

import { pgTable, varchar, boolean, integer } from "drizzle-orm/pg-core";

export const notesTable = pgTable("notes", {
  id: varchar().primaryKey(),
  title: varchar({ length: 255 }).notNull(),
  status: boolean().default(false).notNull(),
  amount: integer(),
  price: integer().notNull(),
});

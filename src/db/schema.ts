import { pgTable, varchar, boolean, integer, uuid } from "drizzle-orm/pg-core";

export const noteTable = pgTable("notes", {
  id: uuid().defaultRandom(),
  title: varchar({ length: 255 }).notNull(),
  status: boolean().default(false).notNull(),
});

export const userTable = pgTable("users", {
  id: uuid().defaultRandom(),
  name: varchar({ length: 100 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
});

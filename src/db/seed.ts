import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { noteTable } from './schema.ts';

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const note: typeof noteTable.$inferInsert = {
    title: 'Note Title',
    status: false
  };

  await db.insert(noteTable).values(note);
  console.log('New note created!')

  const notes = await db.select().from(noteTable);
  console.log('Getting all notes from the database: ', notes)

  await db
    .update(noteTable)
    .set({
      status: true,
    })
    .where(eq(noteTable.id, notes[0].id!));
  console.log('Note info updated!')

  await db.delete(noteTable).where(eq(noteTable.id, notes[0].id!));
  console.log('Note deleted!')
}

main();

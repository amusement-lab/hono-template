import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { notesTable } from './schema.ts';

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const note: typeof notesTable.$inferInsert = {
    id: 'note-1',
    title: 'Note Title',
    status: false,
    amount: 100,
    price: 200,
  };

  await db.insert(notesTable).values(note);
  console.log('New note created!')

  const notes = await db.select().from(notesTable);
  console.log('Getting all notes from the database: ', notes)
  /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
  */

  await db
    .update(notesTable)
    .set({
      amount: 150,
    })
    .where(eq(notesTable.id, note.id));
  console.log('Note info updated!')

  await db.delete(notesTable).where(eq(notesTable.id, note.id));
  console.log('Note deleted!')
}

main();

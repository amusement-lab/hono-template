import { z } from '@hono/zod-openapi'

export const NoteSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.boolean(),
  amount: z.number().optional(),
  price: z.number()
}).openapi('Note')

export const NotesSchema = z.array(NoteSchema).openapi('Notes');
export const NoteUpdateSchema = NoteSchema.omit({ id: true }).openapi('UpdateNote');

export type Note = z.infer<typeof NoteSchema>;
export type Notes = z.infer<typeof NotesSchema>;
export type NoteUpdate = z.infer<typeof NoteUpdateSchema>;

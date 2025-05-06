import { z } from '@hono/zod-openapi'

const NoteSchema = z.array(
  z.object({
    title: z.string(),
    status: z.boolean(),
    amount: z.number().optional(),
    price: z.number()
  }))
  .openapi('Note')

export { NoteSchema }
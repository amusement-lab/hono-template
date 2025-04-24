import { z } from '@hono/zod-openapi'

const TodoSchema = z.array(
  z.object({
    title: z.string(),
    status: z.boolean()
  }))
  .openapi('Todo')

export { TodoSchema }
import { createRoute, OpenAPIHono } from '@hono/zod-openapi'

import { NoteClass } from './note.service.ts'
import { NoteSchema } from './note.entity.ts'

const app = new OpenAPIHono()

app.openapi(
  createRoute({
    method: 'get',
    path: '/',
    responses: {
      200: {
        content: {
          'application/json': {
            schema: NoteSchema,
          },
        },
        description: '',
      },
    },
  }), async (c) => {
    const note = await NoteClass.getAllNote()
    return c.json(note)
  })

export default app
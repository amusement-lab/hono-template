import { OpenAPIHono } from '@hono/zod-openapi'

import { NoteService } from './note.service.ts'
import { NoteSchema } from './note.entity.ts'
import { CreateRouteUtil } from '../../utils/route.util.ts'

const app = new OpenAPIHono()

const noteRoute = new CreateRouteUtil(['Note'])

app.openapi(
  noteRoute.createRouteUtil({
    method: 'get',
    path: '/',
    responseSchema: NoteSchema
  }),
  async (c) => {
    const note = await NoteService.getAllNote()
    return c.json(note)
  })

export default app
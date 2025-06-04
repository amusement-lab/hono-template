import { OpenAPIHono } from '@hono/zod-openapi'

import { NoteService } from './note.service.ts'
import { NoteSchema, NotesSchema, type Notes, type Note } from './note.entity.ts'
import { CreateRouteUtil } from '../../utils/route.util.ts'

const app = new OpenAPIHono()

const noteRoute = new CreateRouteUtil(['Note'])

app.openapi(
  noteRoute.createRouteUtil({
    method: 'get',
    path: '/',
    responseSchema: NotesSchema
  }),
  async (c) => {
    const note: Notes = await NoteService.getAllNote()
    return c.json(note)
  })

app.openapi(
  noteRoute.createRouteUtil({
    method: 'post',
    path: '/',
    requestSchema: NoteSchema,
    responseSchema: NoteSchema
  }),
  async (c) => {
    const body = NoteSchema.parse(await c.req.json())
    const note: Note = await NoteService.createNote(body)
    return c.json(note)
  })

export default app
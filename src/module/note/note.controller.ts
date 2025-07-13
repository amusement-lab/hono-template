import { OpenAPIHono } from '@hono/zod-openapi'

import { NoteService } from './note.service.ts'
import { NoteSchema, NotesSchema, NoteUpdateSchema, type Notes, type Note, type NoteUpdate } from './note.entity.ts'
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

app.openapi(
  noteRoute.createRouteUtil({
    method: 'get',
    path: '/:id',
    responseSchema: NoteSchema
  }),
  async (c) => {
    const id = c.req.param('id') ?? ''
    const note: Note = await NoteService.getNoteById(id)
    return c.json(note)
  })

app.openapi(
  noteRoute.createRouteUtil({
    method: 'put',
    path: '/:id',
    requestSchema: NoteUpdateSchema,
    responseSchema: NoteSchema
  }),
  async (c) => {
    const id = c.req.param('id') ?? ''
    const body: NoteUpdate = NoteUpdateSchema.parse(await c.req.json())
    const note: Note = await NoteService.updateNote(id, body)
    return c.json(note)
  })

app.openapi(
  noteRoute.createRouteUtil({
    method: 'delete',
    path: '/:id',
    responseSchema: NoteSchema
  }),
  async (c) => {
    const id = c.req.param('id') ?? ''
    const note: Note = await NoteService.deleteNote(id)
    return c.json(note)
  })

export default app
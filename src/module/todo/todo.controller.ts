import { Hono } from 'hono'

import TodoClass from './todo.service.ts'

const app = new Hono()

app.get('/', async (c) => {
  const todo = await TodoClass.getAllTodo()
  return c.json(todo)
})

export default app

import { Hono } from 'hono'
import { createRoute, OpenAPIHono } from '@hono/zod-openapi'

import TodoClass from './todo.service.ts'
import { TodoSchema } from './todo.entity.ts'

const app = new OpenAPIHono()

app.openapi(
  createRoute({
    method: 'get',
    path: '/',
    responses: {
      200: {
        content: {
          'application/json': {
            schema: TodoSchema,
          },
        },
        description: 'Retrieve the user',
      },
    },
  }), async (c) => {
    const todo = await TodoClass.getAllTodo()
    return c.json(todo)
  })

export default app
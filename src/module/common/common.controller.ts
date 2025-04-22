import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hono API is starting')
})

export default app

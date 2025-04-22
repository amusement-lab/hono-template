import { Hono } from 'hono'

import UserClass from './user.service.ts'

const app = new Hono()

app.get('/', async (c) => {
  const user = await UserClass.getUser()
  return c.json(user)
})

export default app

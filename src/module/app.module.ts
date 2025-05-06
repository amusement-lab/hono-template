import { OpenAPIHono } from '@hono/zod-openapi'
import { swaggerUI } from '@hono/swagger-ui'

import common from './common/common.controller.ts'
import note from './note/note.controller.ts'
import user from './user/user.controller.ts'

const app = new OpenAPIHono()

app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'My API',
  },
})
app.get('/ui', swaggerUI({ url: '/doc' }))

app.route('/user', user)
app.route('/note', note)
app.route('/', common)

export default app

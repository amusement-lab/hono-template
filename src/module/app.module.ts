import { Hono } from 'hono'

import common from './common/common.controller.ts'
import todo from './todo/todo.controller.ts'
import user from './user/user.controller.ts'

const app = new Hono()

app.route('/user', user)
app.route('/todo', todo)
app.route('/', common)

export default app

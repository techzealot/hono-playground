import { serve, type HttpBindings } from '@hono/node-server'
import { Hono } from 'hono'

type Bindings = HttpBindings & {
  /* ... */
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', (c) => {
  //输出客户端ip地址
  console.log('client ip:', c.env.incoming.socket.remoteAddress)
  //返回测试json
  return c.json({
    message: 'Hello Hono!'
  })
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})

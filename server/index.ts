const express = require('express')
const next = require('next')
const routes = require('../routes/routes')


const port = parseInt(process.env.port, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = routes.getRequestHandler(app)

app.prepare()
.then(() => {
    const server = express()

    server.use(handler).listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})
// server.js
const next = require('next')
const api = require('./routes/api');
const routes = require('./routes')
const app = next({
  dev: process.env.NODE_ENV !== 'production',
  dir: './src'
})
const handler = routes.getRequestHandler(app)

// With express
const express = require('express')
app.prepare().then(() => {
  const server = express();
  server.use('/api', api)
  server.use(handler)
    .listen(3000)
})
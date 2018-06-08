const routes = module.exports = require('next-routes')()

routes
    .add('about')
    .add('shows')
    .add('post', '/posts/:id')
    .add('show', '/shows/:id')
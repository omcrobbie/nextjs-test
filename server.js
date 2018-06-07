const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const data = require('./fixtures');

app.prepare()
    .then(() => {
        const server = express();
        
        server.get('/posts/:id', (req, res) => {
            app.render(req, res, '/post');
        })
        server.get('/show/:id', (req, res) => {
            app.render(req, res, '/show')
        })
        server.get('*', (req, res) => {
            return handle(req, res);
        })

        server.listen(3000, err => {
            if (err) {
                throw err;
            }
            console.log('Server listening on port 3000...')
        })
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    })
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
            const {c, t} = data.filter(fixture => fixture.id === req.params.id)[0]
            app.render(req, res, '/post', {title: t, content: c});
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
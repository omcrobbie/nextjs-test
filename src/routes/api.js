const fetch = require('isomorphic-fetch');
const Router = require('express');

module.exports = Router()
    .get('/oneShow/:id', async (req, res) => {
        const id = req.params.id;
        const data = await fetch(`https://api.tvmaze.com/shows/${id}`)
        const show = await data.json();
        res.json(show)
    })
    .get('/allShows', async (req, res) => {
        const data = await fetch('https://api.tvmaze.com/search/shows?q=batman');
        const shows = await data.json();
        res.json(shows);
    })
import express from 'express';

const app = express()

app.get('/games', (request, response) => {
    return response.json([])
})

app.post('/ads', (request, response) => {
    return response.status(201).json([])
})

app.get('/games/:id/ads', (request, response) => 
{
    return response.send([
        {id: 1, name: 'anuncio'},
        {id: 2, name: 'anuncio'},
        {id: 3, name: 'anuncio'},
        {id: 4, name: 'anuncio'}
    ])
})

app.get('/ads/:id/discord', (request, response) => 
{
    return response.send([])
})

app.listen(3333)
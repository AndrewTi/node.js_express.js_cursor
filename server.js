const express = require('express');
const body = require('body-parser');
const api = require('./api');

const app = express();

app
    .use('/', express.static('./public'))
    .use(body.json())
    .use((req, res, next) => {
        console.log('cursor');
        next();
    })
    .use('/api', api)
    .get('/test-heroku', (req, res, next) => {
        res.json({'name': 'cursor'});
    })
    .listen(process.env.PORT || 3434);
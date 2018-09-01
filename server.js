const express = require('express');
const body = require('body-parser');

const app = express();

app
    .use('/', express.static('./public'))
    .use(body.json())
    .get('/test-heroku', (req, res, next) => {
        res.json({'name': 'cursor'});
    })
    .listen(3434)
const express = require('express');
const body = require('body-parser');

const app = express();


app
    .use('/', express.static('./public'))
    .use(body.json())
    .use('/headers', (req, res, next) => {
        console.log(req.headers);

        res.status(404);
        res.send('test');
    })
    .listen(3434, () => {
        console.log('PORT: 3434');
    });
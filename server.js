const express = require('express');
const body = require('body-parser');

const app = express();


app
    .use(body.json())
    .param('id', (req, res, next, id) => {

        const user = query('SELECT * FROM users WHERE id =' + id, (err, user) => {

            if(err)
                return res.json('500');


            if(!user)
                return res.status(404);

            req._user = user;
            next();
        });
        

        // bad code
        req._user = 'test';
        next();

    })
    .get('user/:id', (req, res) => {
        req._user;
    })
    .post('user/:id')
    .put('user/:id')
    .delete('user/:id')
    .get('/test/name/', (req, res) => {
        console.log("GET:", req.query);
    })
    .post('/test', (req, res) => {
        console.log("POST:", req.body);
    })
    .get('/test/:name/:id/', (req, res) => {
        console.log(req.params, req.query, req._user);

    })
    .listen(3434, () => {
    console.log('PORT: 3434');
})

// user
// user/:id

// http://localhost:3434/test/dfhs5heh534/34234234
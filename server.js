const express = require('express');
const body = require('body-parser');

const app = express();


app
    .use(body.json())
    .use((req, res, next) => {
        // http://localhost:3434/?name=cursor&id=123123
        let { name, id } = req.query;

        name = name + ': test';
        id = id + ': 132';

        // console.log(name, id);

        req._name = name;
        req._id = id;

        next(); // next({err: true, message: 'err'});
    })
    .use((req, res, next) => {
        console.log(req._name, req._id);
    })
    .use((err, req, res, next) => {
        console.log(err);
    })
    .listen(3434, () => {
        console.log("PORT : 3434");
    });
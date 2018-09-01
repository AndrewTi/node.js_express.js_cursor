const express = require('express');
const user = require('./controller/user');

const route = express.Router();

route
    .get('/v1/test', user.getUser);

module.exports = route;
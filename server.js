const express = require('express');
const body = require('body-parser');

const app = express();


app.use(body.json())
app.use((req, res) => {
    console.log(req.query);
    console.log(req.body.name);

    // req.on('data', (file) => {
    //     console.log(file.toString());
    // })
}).listen(3434, () => {
    console.log('PORT: 3434');
})
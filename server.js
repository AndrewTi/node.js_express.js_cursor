const http = require('http');
const url = require('url');

http.createServer((req, res) => {

    console.log( url.parse(req.url, true).query ); // query

    req.on('data', (data) => {
        console.log(JSON.parse(data));
    })
}).listen(3434, () => {
    console.log('PORT: 3434');
})
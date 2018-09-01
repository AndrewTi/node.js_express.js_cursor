const fs = require('fs');

fs.readFile('./file.log', (err, file) => {
    console.log(err, file.toString());
})

fs.appendFile('./append.log', 'Hello append', (err) => {
    console.log(err)
})

fs.appendFile('./append2.log', 'Hello append', (err) => {
    console.log(err)
})

fs.stat('./file.log', (err, info) => {
    console.log(info);
})

fs.unlink('./append2.log', (err) => {
    console.log(err);
})

fs.mkdir('./test2', (err, info) => {
    console.log(err, info);
})

fs.rename('./append.log', './test/file2.log', (err, info) => {
    console.log(err, info);
})


fs.readFileSync('./append3.log');

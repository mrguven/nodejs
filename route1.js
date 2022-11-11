/*
const  express  = require('express');
const app1 = express()


app1.get('/one',(request,response,nexthandler) => {
    response.status(200).send('Hello') })

app1.listen(3010, () => console.log('web server running on port 3010'))
const os = require('os');
console.log(os);





const http = require('http');

const hostname = '127.0.0.1';
const port = 3010;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World45wewe6');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



*/

//const fs = require('fs');

//read file
/*
fs.readFile('blog1.txt', (err,data) => {
    if (err) {
        console.log(err);
    }
    console.log(data,toString());
});

console.log('list line');

// write file

fs.writeFile('blog1.txt', 'hello world', () => {
    console.log('file was written');
})

fs.writeFile('./nodejs/blog2.txt', 'hello world', () => {
    console.log('file was written again');
})

//directories

fs.mkdir(' ./assets', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('folder created');
}) 
const fs = require('./server');



const server1 = require('./route1');

const hostname = '127.0.0.1';
const port = 3010;

const  server = server1.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World45wewe6');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


*/
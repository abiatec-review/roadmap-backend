const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World!');
  res.end();
  // if (request.method == 'POST') {
  //   console.log('POST');
  //   var body = '';
  //   request.on('data', function (data) {
  //     body += data;
  //     console.log('Partial body: ' + body);
  //   });
  //   request.on('end', function () {
  //     console.log('Body: ' + body);
  //     response.writeHead(200, { 'Content-Type': 'text/html' });
  //     response.end('post received');
  //   });
  // } else {
  //   console.log('GET');
  //   var html = `
  //         <html>
  //             <body>
  //                 <form method="post" action="http://localhost:3000">Name:
  //                     <input type="text" name="name" />
  //                     <input type="submit" value="Submit" />
  //                 </form>
  //             </body>
  //         </html>`;
  //   response.writeHead(200, { 'Content-Type': 'text/html' });
  //   response.end(html);
  // }
});

// create an instance of our event emitter
const eventEmitter = new EventEmitter();

// app.get('/', function (req, res) {
//   res.status(200);
//   res.end();
// });

app.listen(8080, function () {
  console.log('app listening at 8080');
});

const express = require('express');
const cors = require('cors');
const events = require('events');
const PORT = 5000;

const emitter = new events.EventEmitter();

app.use(cors());
app.use(express.json());

app.get('/get-messages', (req, res) => {
  emitter.once('newMessage', (message) => {
    res.json(message);
  });
});

app.post('/new-messages', (req, res) => {
  const message = req.body;
  emitter.emit('newMessage', message);
  res.status(200);
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

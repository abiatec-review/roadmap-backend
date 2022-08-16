const http = require('http');

const app = http.createServer((req, res) => {
  // res.writeHead(200, { 'Content-Type': 'text/plain' });
  // res.write('Hello World!');
  // res.end();
  if (req.method == 'POST') {
    console.log('POST');
    var body = '';
    req.on('data', function (data) {
      body += data;
      console.log('Partial body: ' + body);
    });
    req.on('end', function () {
      console.log('Body: ' + body);
      res.writeHead(200, {
        'Content-Type': 'application/json'
        // 'Access-Control-Allow-Origin': '*' /* @dev First, read about security */,
        // 'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        // 'Access-Control-Max-Age': 2592000 // 30 days
      });
      res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
      res.setHeader('Access-Control-Allow-Methods', 'POST');
      res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
      // res.setHeader('Access-Control-Allow-Credentials', 'true');
      // res.setHeader(
      //   'Access-Control-Allow-Headers',
      //   'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
      // );
      res.write(req.body);
      res.end('post received');
    });
  } else {
    console.log('GET');

    res.writeHead(200, {
      'Content-Type': 'application/json'
      // 'Access-Control-Allow-Origin': '*' /* @dev First, read about security */,
      // 'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
      // 'Access-Control-Max-Age': 2592000 // 30 days
    });
    res.end('get received');
  }
});

// create an instance of our event emitter
// const eventEmitter = new EventEmitter();

// app.get('/', function (req, res) {
//   res.status(200);
//   res.end();
// });

app.listen(8080, function () {
  console.log('app listening at 8080');
});

// const cors = require('cors');
// const events = require('events');
// const PORT = 5000;

// const emitter = new events.EventEmitter();

// app.use(cors());
// app.use(express.json());

// app.get('/get-messages', (req, res) => {
//   emitter.once('newMessage', (message) => {
//     res.json(message);
//   });
// });

// app.post('/new-messages', (req, res) => {
//   const message = req.body;
//   emitter.emit('newMessage', message);
//   res.status(200);
// });

// app.listen(PORT, () => console.log(`server started on port ${PORT}`));

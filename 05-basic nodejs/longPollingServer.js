const http = require('http');

const app = http.createServer((req, res) => {
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
      });

      res.write(req.body);
      res.end('post received');
    });
  } else {
    console.log('GET');

    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end('get received');
  }
});

app.listen(8080, function () {
  console.log('app listening at 8080');
});

var options = { port: process.env.PORT, ip: process.env.IP };

const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('Hello from Express!');
})

app.listen(options.port, options.ip, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${options.port}`);
})

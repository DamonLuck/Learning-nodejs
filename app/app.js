'use strict';
const express = require('express');

class App {
    constructor (port, ip) {
        let app = express();
        app.get('/', (request, response) => {
          response.send('Hello from Express!');
        });
        
        app.listen(port, ip, (err) => {
          if (err) {
            return console.log('something bad happened', err);
          }
        
          console.log(`server is listening on ${port}`);
        });
    }
}

module.exports = App;
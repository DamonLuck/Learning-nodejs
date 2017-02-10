'use strict';

const App = require('./app/app');

var options = { port: process.env.PORT, ip: process.env.IP };

let c = new App(options.port, options.ip);
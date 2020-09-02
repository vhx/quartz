'use strict';

/* App
..............................*/
require('dotenv').load();

const express     = require('express');
const http        = require('http');
const parser      = require('body-parser');
const handlebars  = require('handlebars');
const fs          = require('fs');
const app         = express();

app.set('port', process.env.PORT);
app.use(express.static('app/public'));
app.use(parser.json());


/* Register Views as Partials
..............................*/
let menu_template = fs.readFileSync(__dirname + '/layouts/menu.html', 'utf8');
let home_template = fs.readFileSync(__dirname + '/layouts/home.html', 'utf8');
handlebars.registerPartial('menu', menu_template);
handlebars.registerPartial('home', home_template);

app.get('*', function(request, response) {
  fs.readFile(__dirname + '/layouts/app.html', 'utf8', function(err, source){
    if (err) {
      return process.stdout.write(err);
    }

    response.send(handlebars.compile(source)({
      index: request.url === '/',
    }));
  });
});

const server = http.createServer(app);

server.listen(app.get('port'), function() {
  process.stdout.write('Web server listening on port ' + app.get('port') + '\n');
});

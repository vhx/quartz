'use strict';

/* App
..............................*/
require('dotenv').load();

const express     = require('express');
const http        = require('http');
const parser      = require('body-parser');
const handlebars  = require('handlebars');
const fs          = require('fs');
const walk        = require('fs-walk');
const hljs        = require('highlight.js');
const app         = express();
const views_dir   = 'quartz-css';

app.set('port', process.env.PORT);
app.use(express.static('app/public'));
app.use(parser.json());


/* Register Views as Partials
..............................*/
let views = '';
let code = {};
let menu_template = fs.readFileSync(__dirname + '/layouts/menu.html', 'utf8');
let home_template = fs.readFileSync(__dirname + '/layouts/home.html', 'utf8');
handlebars.registerPartial('menu', menu_template);
handlebars.registerPartial('home', home_template);

walk.walkSync(views_dir, function(base_dir, filename) {
  if (base_dir.match(/\/docs/) && filename.match(/\.html\.js/)) {
    let template = fs.readFileSync(base_dir + '/' + filename, 'utf8');
    views = views + template;
  }
  if (base_dir.match(/\/docs\/code/)) {
    let temp = fs.readFileSync(base_dir + '/' + filename, 'utf8');
    let name = filename.split('.')[0];
    let language = filename.split('.')[1];

    if (language.match(/rb/)) {
      language = 'ruby';
    }
    code[name] = {
      language: language,
      template: hljs.highlight(language, temp).value
    };
  }
});

app.get('*', function(request, response) {
  fs.readFile(__dirname + '/layouts/app.html', 'utf8', function(err, source){
    if (err) {
      return console.log(err);
    }

    response.send(handlebars.compile(source)({
      index: request.url === '/',
      views: views,
      code: JSON.stringify(code)
    }));
  });
});

const server = http.createServer(app);

server.listen(app.get('port'), function() {
  process.stdout.write('Web server listening on port ' + app.get('port'));
});
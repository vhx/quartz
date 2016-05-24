'use strict';

const catw        = require('catw');
const fs          = require('fs');
const chalk       = require('chalk');
const babel       = require('babel-core');
const sass        = require('node-sass');
const concat      = require('concat-files');
const manifests   = {
  scripts: require(__dirname + '/../app/client/_manifest.js')
  // vendor: require('./manifests/vendor.js')
};

catw('app/client/**/*.js', function() {
  let src = 'app/public/app.js';
  concat(manifests.scripts, src, function() {
    let result = babel.transform(fs.readFileSync(src).toString(), {
      'presets': ['es2015']
    });
    fs.writeFile(src, result.code, function(err) {
      if (err) {
        process.stdout.write(chalk.red(err));
      }
      else {
        process.stdout.write(chalk.yellow('App JS Updated \n'));
      }
    });
  });
});

catw('client/styles/**/*.scss', function() {
  let src = 'app/client/styles/_manifest.scss';
  sass.render({
      file: src
  }, function(err, output) {
    fs.writeFile('app/public/app.css', output.css, function(err) {
    if (err) { process.stdout.write(chalk.red(err)); }
      process.stdout.write(chalk.green('CSS Updated \n'));
    });
  });
});

catw('quartz-css/**/*.scss', function() {
  let src = 'quartz-css/vhx.scss';
  sass.render({
      file: src
  }, function(err, output) {
    fs.writeFile('app/public/quartz.css', output.css, function(err) {
    if (err) { process.stdout.write(chalk.red(err)); }
      process.stdout.write(chalk.green('CSS Updated \n'));
    });
  });
});
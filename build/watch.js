'use strict';

const catw        = require('catw');
const fs          = require('fs');
const walk        = require('fs-walk');
const chalk       = require('chalk');
const babel       = require('babel-core');
const sass        = require('node-sass');
const concat      = require('concat-files');
const manifests   = {
  scripts: require(__dirname + '/_app.js'),
  vendor: require(__dirname + '/_vendor.js'),
  quartzjs: require(__dirname + '/_quartzjs.js')
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

concat(manifests.vendor, 'app/public/vendor.js', function(err) {
  if (err) {
    process.stdout.write(chalk.red(err));
  }
  else {
    process.stdout.write(chalk.yellow('Vendor JS Updated \n'));
  }
});

sass.render({
    file: 'quartz-css/vhx-style-icons/styles/icons.svg.scss'
}, function(err, output) {
  fs.writeFile('app/public/quartz-icons.css', output.css, function(err) {
  if (err) { process.stdout.write(chalk.red(err)); }
    process.stdout.write(chalk.green('Icons Updated \n'));
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

catw('quartz-js/**/*.js', function() {
  let src = 'app/public/quartz.js';

  walk.walkSync('quartz-js/components', function(base_dir, filename, stat) {
    if (!stat.isDirectory() && !filename.match(/scope\.js/)) {
      manifests.quartzjs.push(base_dir + '/' + filename);
    }
  });

  concat(manifests.quartzjs, src, function() {
    let result = babel.transform(fs.readFileSync(src).toString(), {
      'presets': ['es2015']
    });
    fs.writeFile(src, result.code, function(err) {
      if (err) {
        process.stdout.write(chalk.red(err));
      }
      else {
        process.stdout.write(chalk.yellow('Quartz JS Updated \n'));
      }
    });
  });
});
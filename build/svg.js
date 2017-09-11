'use strict';

const SVG = function(gruntDone) {

  const _         = require('underscore');
  const a         = require('async');
  const fs        = require('fs');
  const mustache  = require('mustache');
  const chalk     = require('chalk');
  const path      = require('path');

  let self    = {};
  let count   = 0;
  let options = {
    sets: ['all', 'ui', 'social', 'payment', 'directional', 'apps'],
    colors: {
      navy: '#375667',
      gray: '#9baab2',
      white: '#ffffff',
      teal: '#22b8af',
      black: '#000000',
      blue: '#00adef'
    }
  };

  self.icons_list = [];

  /* ...............................
    Setup Color Options
  .................................*/
  self.getColorOptions = function(colors) {
    let options = {};
    options.all = colors;
    options.all.multi = false;
    options.multi = {
      multi: false
    };

    _.each(colors, function(hex, color) {
      options[color] = {};
      options[color][color] = hex;
    });

    return options;
  };

  options.colors = self.getColorOptions(options.colors);

  /* ...............................
    Create Doc List
  .................................*/
  self.createDocList = function(callback) {
    let template = 'Q.components.guide.styleguide.ui.icons_list = function() { return ' + JSON.stringify(self.icons_list) + '; };';

    fs.writeFile('quartz-css/icons/docs/guide.icons.html.js', template, function(err) {
      if (err) {
        return process.stdout.write(chalk.red(err));
      }

      callback();
    });
  };

  /* ...............................
    Create and Export the CSS
  .................................*/
  self.createCSS = function(icon, color, set, data, all, callback) {
    let model;

    data = color.hex ? data.replace(/(fill=\"\#).{6}(\")/gi, 'fill="' + color.hex + '"') : data;

    model = {
      datauri: encodeURIComponent(data),
      prefix: '.icon',
      name: icon,
      color: (color.name === 'multi') ? '' : '-' + color.name
    };

    fs.readFile('quartz-svg/template.mustache', 'utf8', function (err, template) {
      if (err) {
        return process.stdout.write(chalk.red(err));
      }

      let filename_prefix = 'quartz-svg/svg-css/';
      let filename;

      if (all) {
        filename = 'all/icon-' + icon + '.css';
      } else {
        filename_prefix = filename_prefix + 'sets/icons-' + set;
        filename = (color.set === 'all') ?  '.css' :  '-' + color.set + '.css';
      }

      let output = mustache.render(template, model);

      fs.appendFile(filename_prefix + filename,  output, function() {
        callback();
      });
    });
  };

  /* ...............................
    Walk through all the Icons
  .................................*/
  self.walkIcons = function(files, set, cb) {
    files = files.filter(function(file) {
      return file.substr(-4) === '.svg';
    });
    let filesCount = 0;

    a.eachLimit(files, 200, function (filename) {
      let file_path = path.join('quartz-svg/svg/' + set, filename);
      let name = filename.split('.svg')[0];

      fs.readFile(file_path, 'utf8', function (err, data) {
        if (err) {
          return process.stdout.write(chalk.red(err));
        }
        if (set === 'all') {
          self.icons_list.push({ name: name });
        }

        _.each(options.colors, function(color_set, color_set_name) {
          _.each(color_set, function(hex, color) {
            if (set === 'all' && color_set_name !== 'all') {
              return;
            }
            self.createCSS(name, {
              set: color_set_name,
              name: color,
              hex: hex
            }, set, data, (set === 'all') ? true : false, function() {
              filesCount++;
              if (filesCount === files.length) {
                cb();
              }
            });
          });
        });

      });
    });
  };

  /* ...............................
    Init Each Set
  .................................*/
  _.each(options.sets, function(set) {
    a.waterfall([
      function (cb) {
        fs.readdir('quartz-svg/svg/' + set, cb);
      },
      function (files, cb) {
        self.walkIcons(files, set, cb);
      }
    ], function (err) {
      if (err) {
        process.stdout.write(chalk.red(err));
      } else {
        count++;
        process.stdout.write(chalk.green('✓ Created icons-' + set + ' set\n'));
        if (count >= options.sets.length) {
          self.createDocList(function() {
            gruntDone();
          });
        }
      }
    });
  });
};


module.exports = SVG;

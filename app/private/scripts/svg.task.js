SVG = function(gruntDone) {

  var _         = require('underscore'),
      a         = require('async'),
      fs        = require('fs'),
      mustache  = require('mustache'),
      path      = require('path'),
      options   = {},
      count     = 0;
      self      = this;
var files_count = 0;
  options = {
    sets: ['all', 'ui', 'social', 'payment', 'directional', 'apps'],
    colors: {
      navy: '#375667',
      gray: '#9baab2',
      white: '#ffffff',
      teal: '#22b8af',
      black: '#000000'
    }
  };

  /* ...............................
    Setup Color Options
  .................................*/
  self.getColorOptions = function(colors) {
    var options = {};
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

  options.colors = getColorOptions(options.colors);

  /* ...............................
    Create and Export the CSS
  .................................*/
  self.createCSS = function(icon, color, set, data, all, callback) {
    var model;

    data = color.hex ? data.replace(/(fill=\"\#).{6}(\")/gi, 'fill="' + color.hex + '"') : data;

    model = {
      datauri: encodeURIComponent(data),
      prefix: '.icon',
      name: icon,
      color: (color.name === 'multi') ? '' : '-' + color.name
    };

    fs.readFile('app/private/scripts/template.mustache', 'utf8', function (err, template) {
      if (err) {
        return console.log(err);
      }

      var filename_prefix = 'app/private/svg-css/';
      var filename;

      if (all) {
        filename = 'all/quartz.icon-' + icon + '.css';
      } else {
        filename_prefix = filename_prefix + 'sets/quartz.icons-' + set;
        filename = (color.set === 'all') ?  '.css' :  '-' + color.set + '.css';
      }

      var output = mustache.render(template, model);

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

    a.eachLimit(files, 200, function (filename, done) {
      var file_path = path.join('app/private/svg/' + set, filename);
      var name = filename.split('.svg')[0];

      fs.readFile(file_path, 'utf8', function (err, data) {
        if (err) {
          return console.log(err);
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
              cb();
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
        fs.readdir('app/private/svg/' + set, cb);
      },
      function (files, cb) {
        self.walkIcons(files, set, cb);
      }
    ], function (err) {
      if (err) {
        console.log(err);
      } else {
        count++;
        console.log('Created icons-' + set + ' set');
        if (count >= options.sets.length) {
          gruntDone();
        }
      }
    });
  });
};


module.exports = SVG;

'use strict';

const chokidar    = require('chokidar');
const fs          = require('fs');
const walk        = require('fs-walk');
const hljs        = require('highlight.js');
const chalk       = require('chalk');
const babel       = require('babel-core');
const sass        = require('node-sass');
const glob        = require('glob');
const cleancss    = require('clean-css');
const uglify      = require('uglify-js');
const concat      = require('concat-files');
const src         = {
  // app
  appcss: {
    watch: './app/client/styles/*.scss',
    manifest: './build/_app.scss',
    distr: 'app/public/app.css'
  },
  appjs: {
    watch: './app/client/**/*.js',
    manifest: './build/_app.js',
    distr: 'app/public/app.js'
  },
  // vendor
  vendorjs: {
    manifest: './build/_vendor.js',
    distr: 'app/public/vendor.js'
  },
  // quartz
  quartzjs: {
    watch: './quartz-js/**/*.js',
    manifest: './build/_quartz.js',
    distr: 'app/public/quartz.js'
  },
  quartzcss: {
    watch: './quartz-css/**/*.scss',
    manifest: './quartz-css/vhx.scss',
    distr: 'app/public/quartz.css'
  },
  quartzicons: {
    manifest: './quartz-css/vhx-style-icons/styles/icons.svg.scss',
    distr: 'app/public/quartz-icons.css'
  }
};

 const log_stream = fs.createWriteStream('logs/' + (process.argv[2] ? 'build.log' : 'output.log'), { flags: 'a' });
 const logger = function(type, message) {
   let color = '\x1b[37m';
   if (type === 'error') {
     color = '\x1b[31m';
   }
   if (type === 'success') {
     color = '\x1b[36m';
   }
   log_stream.write(color + '[watch] ' + message + '\x1b[39m \n');
 };

/* ....................................
  APP CSS > public/app.css
....................................*/
const app_css_render = function() {
  sass.render({
    file: src.appcss.manifest
  }, function(err, output) {
    if (err) {
      logger('error', err);
    } else {
      let css = process.argv[2] ? new cleancss().minify(output.css).styles : output.css;

      fs.writeFile(src.appcss.distr, css, function(err) {
        if (err) {
          logger('error', err);
        }
        else {
          logger('success', 'App CSS Updated');
        }
      });
    }
  });
};

if (!process.argv[2]) {
  const app_css_watcher = chokidar.watch(src.appcss.watch, {
    ignored: /[\/\\]\./
  });

  app_css_watcher.add(src.appcss.manifest);
  app_css_watcher.on('change', function() {
    try {
      app_css_render();
    } catch (err) {
      logger('error', err);
    }
  });
}

/* ....................................
  APP JS > public/app.js
....................................*/
const app_js_render = function() {
  concat(require('.' + src.appjs.manifest), src.appjs.distr, function(err) {
    if (err) {
      logger('error', err);
    } else {
      let components;
      let scope;

      try {
        components = babel.transform(fs.readFileSync(src.appjs.distr).toString(), {
          'presets': ['es2015']
        }).code;
        scope = babel.transform(fs.readFileSync('app/client/scope.js').toString(), {
          'presets': ['es2015']
        }).code;
      } catch (err) {
        logger('error', err);
      }

      let Q = { code: {} };
      let views = '';

      walk.walkSync('quartz-css', function(base_dir, filename) {
        if (base_dir.match(/\/docs/) && filename.match(/\.html\.js/)) {
          let template = fs.readFileSync(base_dir + '/' + filename, 'utf8');
          views = views + template;
        }
        if (base_dir.match(/\/docs\/code/) && !filename.match(/^\./)) {
          let temp = fs.readFileSync(base_dir + '/' + filename, 'utf8');
          let name = filename.split('.')[0];
          let language = filename.split('.')[1];

          if (language.match(/rb/)) {
            language = 'ruby';
          }

          Q.code[name] = {
            language: language,
            template: hljs.highlight(language, temp).value
          };
        }
      });
      walk.walkSync('quartz-js', function(base_dir, filename) {
        if (base_dir.match(/\/docs/) && filename.match(/\.html\.js/)) {
          let template = fs.readFileSync(base_dir + '/' + filename, 'utf8');
          views = views + template;
        }
        if (base_dir.match(/\/docs\/code/) && !filename.match(/^\./)) {
          let temp = fs.readFileSync(base_dir + '/' + filename, 'utf8');
          let name = filename.split('.')[0];
          let language = filename.split('.')[1];

          if (language.match(/js/)) {
            language = 'javascript';
          }
          if (language.match(/md/)) {
            language = 'markdown';
          }

          Q.code[name] = {
            language: language,
            template: language === 'x' ? temp : hljs.highlight(language, temp).value
          };
        }
      });

      let js = scope + ';' + views + ';' + ';Q.code=' + JSON.stringify(Q.code) + ';' + components;

      try {
        if (process.argv[2]) {
          js = uglify.minify(js, { fromString: true }).code;
        }
        fs.writeFile(src.appjs.distr, js, 'utf-8', function() {
          logger('success', 'App JS Updated');
        });
      } catch (err) {
        logger('error', err);
      }
    }
  });
};

if (!process.argv[2]) {
  const app_js_watcher = chokidar.watch(src.appjs.watch, {
    ignored: /[\/\\]\./
  });
  app_js_watcher.add('quartz-css/**/*.html.js');
  app_js_watcher.add('quartz-js/**/*.html.js');
  app_js_watcher.add(src.appjs.manifest);
  app_js_watcher.on('change', function() {
    try {
      app_js_render();
    } catch (e) {}
  });
}


/* ....................................
  VENDOR JS > public/vendor.js
....................................*/
const vendor_js_render = function() {
  fs.writeFile(src.vendorjs.distr, '', 'utf-8');
  concat(require('.' + src.vendorjs.manifest), src.vendorjs.distr, function(err) {
    if (err) {
      logger('error', err);
    } else {
      if (process.argv[2]) {
        let js = uglify.minify(src.vendorjs.distr).code;
        fs.writeFile(src.vendorjs.distr, js, function(err) {
          if (err) {
            logger('error', err);
          }
          else {
            logger('success', 'Vendor JS Updated');
          }
        });
      } else {
        logger('success', 'Vendor JS Updated');
      }
    }
  });
};

if (!process.argv[2]) {
  chokidar.watch(src.vendorjs.manifest, {
    ignored: /[\/\\]\./
  }).on('change', function() {
    try {
      vendor_js_render();
    } catch (err) {
      logger('error', err);
    }
  });
}


/* ....................................
  QUARTZ ICONS > public/quartz-icons.css
....................................*/
const quartz_icons_render = function() {
  sass.render({
      file: src.quartzicons.manifest
  }, function(err, output) {
    if (err) {
      logger('error', err);
    }
    else {
      let css = process.argv[2] ? new cleancss().minify(output.css).styles : output.css;
      fs.writeFile(src.quartzicons.distr, css, function(err) {
        if (err) {
          logger('error', err);
        }
        else {
          logger('success', 'Quartz Icons CSS Updated');
        }
      });
    }
  });
};

if (!process.argv[2]) {
  chokidar.watch(src.quartzicons.manifest, {
    ignored: /[\/\\]\./
  }).on('change', function() {
    try {
      quartz_icons_render();
    } catch (e) {
      process.stdout.write(chalk.red(e + '\n'));
    }
  });
}


/* ....................................
  QUARTZ CSS > public/quartz.css
....................................*/
const quartz_css_render = function() {
  sass.render({
    file: src.quartzcss.manifest
  }, function(err, output) {
    if (err) {
      process.stdout.write(chalk.red(err));
    } else {
      let css = process.argv[2] ? new cleancss().minify(output.css).styles : output.css;
      fs.writeFile(src.quartzcss.distr, css, function(err) {
        if (err) {
          logger('error', err);
        }
        else {
          logger('success', 'Quartz CSS Updated');
        }
      });
    }
  });
};

if (!process.argv[2]) {
  const quartz_css_watcher = chokidar.watch(src.quartzcss.watch, {
    ignored: /[\/\\]\./
  });
  quartz_css_watcher.add(src.quartzcss.manifest);
  quartz_css_watcher.on('change', function() {
    try {
      quartz_css_render();
    } catch (err) {
      logger('error', err);
    }
  });
}


/* ....................................
  QUARTZ CSS > public/quartz.css
....................................*/
const quartz_component_css_render = function() {
  if (!fs.existsSync('quartz-js/components/temp/styles')){
   fs.mkdirSync('quartz-js/components/temp');
   fs.mkdirSync('quartz-js/components/temp/styles');
  }
  fs.writeFile('quartz-js/components/temp/styles/components.scss', '', function() {
    glob.sync('quartz-js/**/styles/*.scss').forEach(function(file) {
      fs.appendFileSync('quartz-js/components/temp/styles/components.scss', fs.readFileSync(file, 'utf-8'));
    });

    sass.render({
      file: 'quartz-js/components/temp/styles/components.scss'
    }, function(err, output) {
      if (err) {
        logger('error', err);
      } else {
        let css = process.argv[2] ? new cleancss().minify(output.css).styles : output.css;

        fs.writeFile('app/public/components.css', css, function(err) {
          if (err) {
            logger('error', err);
          }
          else {
            logger('success', 'Components CSS Updated');
            fs.unlinkSync('quartz-js/components/temp/styles/components.scss');
            fs.rmdirSync('quartz-js/components/temp/styles');
            fs.rmdirSync('quartz-js/components/temp');
          }
        });
      }
    });
  });
};

if (!process.argv[2]) {
  const quartz_component_css_watcher = chokidar.watch('quartz-js/**/styles/*.scss', {
    ignored: /[\/\\]\./
  });
  quartz_component_css_watcher.on('change', function() {
    try {
      quartz_component_css_render();
    } catch (e) {
      process.stdout.write(chalk.red(e));
    }
  });
}


/* ....................................
  QUARTZ JS > public/quartz.js
....................................*/
let quartz_js_arr = require('.' + src.quartzjs.manifest);

const quartz_js_render = function() {
  walk.walkSync('quartz-js/components', function(base_dir, filename, stat) {
    if (!stat.isDirectory() && !filename.match(/scope\.js/) && !base_dir.match(/docs/) && filename.match(/\.js/)) {
      quartz_js_arr.push(base_dir + '/' + filename);
    }
  });

  concat(quartz_js_arr, src.quartzjs.distr, function(err) {
    if (err) {
      process.stdout.write(chalk.red(err + '\n'));
    }
    else {
      let result, min;
      try {
        result = babel.transform(fs.readFileSync(src.quartzjs.distr).toString(), {
          'presets': ['es2015']
        });
      } catch (err) {
        logger('error', err);
      }

      try {
        let js = result.code;

        if (process.argv[2]) {

          js = uglify.minify(js, { fromString: true }).code;
        }

        fs.writeFile(src.quartzjs.distr, js, function(err) {
          if (err) {
            logger('error', err);
          }
          else {
            logger('success', 'Quartz JS Updated');
          }
        });
      } catch (err) {
        logger('error', err);
      }
    }
  });
};

if (!process.argv[2]) {
  const quartz_js_watcher = chokidar.watch(src.quartzjs.watch, {
    ignored: /[\/\\]\./
  });
  quartz_js_watcher.add(src.quartzjs.manifest);
  quartz_js_watcher.on('change', function() {
    try {
      quartz_js_render();
    } catch (err) {
      logger('error', err);
    }
  });
}


/* ....................................
  Render on watch start
....................................*/
try {
  app_css_render();
  app_js_render();
  quartz_js_render();
  quartz_css_render();
  quartz_component_css_render();
  quartz_icons_render();
  vendor_js_render();
} catch (err) {
  logger('error', err);
}
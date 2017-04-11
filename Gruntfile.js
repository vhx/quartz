'use strict';

const fs = require('fs');

module.exports = function(grunt) {

  grunt.initConfig({
    sass_globbing: {
      target : {
        files : {
          'quartz-css/vhx.scss': [
          'quartz-css/**/styles/*.scss',
          '!quartz-css/icons/styles/icons.svg.scss',
          '!quartz-css/icons/styles/icons.extends.scss',
          '!quartz-css/colors/styles/colors.scss',
          '!quartz-css/**/styles/guide.scss'
          ]
        }
      }
    },
    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        files : {
          'dist/quartz.css' : 'quartz-css/vhx.scss'
        }
      },
      npm: {
        options: {
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          flatten: true,
          cwd: 'quartz-css',
          src: ['**/styles/*.scss'],
          dest: './dist',
          ext: '.css'
        }]
      }
    },
    cssmin: {
      target : {
        files : {
          'dist/quartz.min.css' : 'dist/quartz.css'
        }
      }
    },
    concat: {},
    clean: {
      svg: ['quartz-svg/svg-css/all/*.css', 'quartz-svg/svg-css/sets/*.css'],
      pre_svg: {
        src: ['dist/*.css'],
        filter: function(filepath) {
          let regex = /(icon)(.+)(.css)/g;
          return regex.test(filepath);
        }
      }
    },
    babel: {
      options: {
        presets: ['es2015']
      },
      dist: {
        files: {}
      }
    },
    copy: {
      svg: {
        files: [
          {
            src: 'quartz-svg/svg-css/**/*.css',
            dest: 'dist/',
            flatten: true,
            expand: true
          }
        ]
      },
      scss: {
        files: [
          {
            src: 'quartz-css/colors/config/_variables.scss',
            dest: 'dist/colors.scss'
          }
        ]
      },
      components: {
        files: [
          {}
        ]
      }
    }
  });

  grunt.registerTask('prepareComponents', function() {
    grunt.file.expand('quartz-js/components/*').forEach(function(dir) {
      let component_name = dir.substr(dir.lastIndexOf('/')+1);
      let dir_path = [dir + '/**/*.js', '!' + dir + '/docs/**/*.js'];
      if (component_name === 'scope.js') {
        component_name = 'scope';
        dir_path = [dir];
      }

      // get the current concat object from initConfig
      let concat = grunt.config.get('concat') || {};
      let babel = grunt.config.get('babel') || {};

      // create a subtask for each module, find all src files
      // and combine into a single js file per module

      let concat_opts = { files: {} };

      concat_opts.files['dist/component-' + component_name + '.js'] = dir_path;
      babel.dist.files['dist/component-' + component_name + '.js'] = 'dist/component-' + component_name + '.js';

      concat[component_name] = concat_opts;

      // add module subtasks to the concat task in initConfig
      grunt.config.set('concat', concat);
      grunt.config.set('babel', babel);
    });
  });

  grunt.registerTask('prepareComponentStyles', function() {
    grunt.file.expand('quartz-js/components/*').forEach(function(dir) {
      let component_name = dir.substr(dir.lastIndexOf('/')+1);

      if (component_name !== 'scope.js' && fs.existsSync(dir + '/styles')) {

        // get the current concat object from initConfig
        let sass = grunt.config.get('sass') || {};

        // create a subtask for each module, find all src files
        // and combine into a single js file per module
        let dest_dir = 'dist/component-' + component_name + '.css';
        let src_dir =  dir + '/styles/*.scss';

        sass.dist.files[dest_dir] = src_dir;
        // add module subtasks to the concat task in initConfig
        grunt.config.set('sass', sass);
      }
    });
  });

  grunt.registerTask('grunt-svg-css', function() {
    let concat = grunt.config.get('concat') || {};

    concat.svg = {
      src: 'quartz-svg/svg-css/all/*.css',
      dest: 'quartz-css/icons/styles/icons.svg.scss'
    };
    grunt.config.set('concat', concat);

    let done = this.async();
    let SVG = require('./build/svg');

    SVG(done);
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass-globbing');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-babel');

  grunt.registerTask('build-icons', ['clean:pre_svg', 'grunt-svg-css', 'copy:svg', 'concat:svg', 'clean:svg']);
  grunt.registerTask('component-js', ['prepareComponents', 'concat', 'babel']);
  grunt.registerTask('component-styles', ['prepareComponentStyles']);

  grunt.registerTask('build', ['sass_globbing', 'copy:scss', 'component-js', 'component-styles', 'sass:dist', 'sass:npm', 'cssmin']);
};

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    sass_globbing: {
      target : {
        files : {
          'quartz-css/vhx.scss': [
          'quartz-css/**/styles/*.scss',
          '!quartz-css/vhx-style-icons/styles/icons.svg.scss',
          '!quartz-css/vhx-style-icons/styles/icons.extends.scss',
          '!quartz-css/vhx-style-colors/styles/colors.scss',
          '!quartz-css/**/styles/guide.scss',
          '!quartz-css/_vhx-style-template/**/*.scss'
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
          'quartz-rails/vendor/assets/stylesheets/vhx-quartz.css' : 'quartz-css/vhx.scss'
        }
      }
    },
    cssmin: {
      target : {
        files : {
          'quartz-rails/vendor/assets/stylesheets/vhx-quartz.min.css' : 'quartz-rails/vendor/assets/stylesheets/vhx-quartz.css'
        }
      }
    },
    concat: {},
    clean: {
      svg: ['quartz-svg/svg-css/all/*.css', 'quartz-svg/svg-css/sets/*.css'],
      pre_svg: {
        src: ['distro/*.css', 'quartz-rails/vendor/assets/stylesheets/*.css'],
        filter: function(filepath) {
          let regex = /(vhx-quartz.icon)(.+)(.css)/g;
          return regex.test(filepath);
        }
      }
    },
    copy: {
      css: {
        cwd: 'quartz-rails/vendor/assets/stylesheets/',
        src: '**/*',
        dest: 'distro/',
        expand: true
      },
      svg: {
        files: [
          {
            src: 'quartz-svg/svg-css/**/*.css',
            dest: 'distro/',
            flatten: true,
            expand: true
          },
          {
            src: 'quartz-svg/svg-css/**/*.css',
            dest: 'quartz-rails/vendor/assets/stylesheets/',
            flatten: true,
            expand: true
          }
        ]
      }
    }
  });

  grunt.registerTask('prepareComponents', function() {
    grunt.file.expand('quartz-js/components/*').forEach(function(dir) {
      let component_name = dir.substr(dir.lastIndexOf('/')+1);

      if (component_name !== 'scope.js') {
        // get the current concat object from initConfig
        let concat = grunt.config.get('concat') || {};

        // create a subtask for each module, find all src files
        // and combine into a single js file per module
        let dir_path = [dir + '/**/*.js', '!' + dir + '/docs/*.js', '!' + dir + '/docs/*.html.js'];
        concat[component_name] = {
            src: dir_path,
            dest: 'distro/vhx-quartz.' + component_name + '.js'
        };

        // add module subtasks to the concat task in initConfig
        grunt.config.set('concat', concat);
      }

    });
  });

  grunt.registerTask('prepareComponentStyles', function() {
    grunt.file.expand('quartz-js/components/*').forEach(function(dir) {
      let component_name = dir.substr(dir.lastIndexOf('/')+1);

      if (component_name !== 'header' && component_name !== 'search_input' && component_name !== 'scope.js') {
        // get the current concat object from initConfig
        let sass = grunt.config.get('sass') || {};

        // create a subtask for each module, find all src files
        // and combine into a single js file per module
        let dest_dir = 'distro/vhx-quartz.' + component_name + '.css';
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
      dest: 'quartz-css/vhx-style-icons/styles/icons.svg.scss'
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

  grunt.registerTask('build-icons', ['clean:pre_svg', 'grunt-svg-css', 'copy:svg', 'concat:svg', 'clean:svg']);
  grunt.registerTask('components', ['prepareComponents', 'concat']);
  grunt.registerTask('component-styles', ['prepareComponentStyles', 'sass']);

  grunt.registerTask('build', ['sass_globbing', 'cssmin', 'copy:css', 'sass']);
};
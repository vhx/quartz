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
    concat: {
      svg: {
        src: 'quartz-svg/svg-css/all/*.css',
        dest: 'quartz-css/vhx-style-icons/styles/icons.svg.scss'
      },
    },
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

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass-globbing');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('grunt-svg-css', function() {
    let done = this.async();
    let SVG = require('./build/svg');

    SVG(done);
  });

  grunt.registerTask('build-icons', ['clean:pre_svg', 'grunt-svg-css', 'copy:svg', 'concat:svg', 'clean:svg']);
  grunt.registerTask('build', ['sass_globbing', 'cssmin', 'copy:css', 'sass']);
};
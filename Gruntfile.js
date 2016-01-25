module.exports = function(grunt) {

  grunt.initConfig({
    sass_globbing: {
      target : {
        files : {
          'app/packages/vhx.scss': [
          'app/packages/**/styles/*.scss',
          '!app/packages/vhx-style-icons/styles/icons.svg.scss',
          '!app/packages/vhx-style-icons/styles/icons.extends.scss',
          '!app/packages/vhx-style-colors/styles/colors.scss',
          '!app/packages/**/styles/guide.scss',
          '!app/packages/_vhx-style-template/**/*.scss'
          ]
        }
      }
    },
    sass: {
      dist: {
        files : {
          'app/private/quartz-rails/vendor/assets/stylesheets/vhx-quartz.css' : 'app/packages/vhx.scss'
        }
      }
    },
    cssmin: {
      target : {
        files : {
          'app/private/quartz-rails/vendor/assets/stylesheets/vhx-quartz.min.css' : 'app/private/quartz-rails/vendor/assets/stylesheets/vhx-quartz.css'
        }
      }
    },
    concat: {
      svg: {
        src: 'app/private/svg-css/all/*.css',
        dest: 'app/packages/vhx-style-icons/styles/icons.svg.scss'
      },
    },
    clean: {
      svg: ['app/private/svg-css/all/*.css', 'app/private/svg-css/sets/*.css'],
      pre_svg: {
        src: ['app/private/distro/*.css', 'app/private/quartz-rails/vendor/assets/stylesheets/*.css'],
        filter: function(filepath) {
          var regex = /(vhx-quartz.icon)(.+)(.css)/g;
          return regex.test(filepath);
        }
      }
    },
    copy: {
      css: {
        cwd: 'app/private/quartz-rails/vendor/assets/stylesheets/',
        src: '**/*',
        dest: 'app/private/distro/',
        expand: true
      },
      svg: {
        files: [
          {
            src: 'app/private/svg-css/**/*.css',
            dest: 'app/private/distro/',
            flatten: true,
            expand: true
          },
          {
            src: 'app/private/svg-css/**/*.css',
            dest: 'app/private/quartz-rails/vendor/assets/stylesheets/',
            flatten: true,
            expand: true
          }
        ]
      }
    },
    folder_list: {
      options: {
        files: true,
        folders: true
      },
      files: {
        src: ['private/svg/all/*.svg'],
        dest: 'app/packages/vhx-style-icons/docs/icon-list.json',
        cwd: 'app/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-file-regex-rename');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-grunticon');
  grunt.loadNpmTasks('grunt-sass-globbing');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-folder-list');
  grunt.registerTask('grunt-svg-css', function() {
    var done = this.async();
    var SVG = require('./app/private/scripts/svg.task')(done);
  });

  grunt.registerTask('build-icons', ['clean:pre_svg', 'grunt-svg-css', 'copy:svg', 'concat:svg', 'clean:svg']);
  grunt.registerTask('build', ['sass_globbing', 'cssmin', 'copy:css', 'sass']);
  grunt.registerTask('files', ['folder_list']);
};

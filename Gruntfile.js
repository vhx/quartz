module.exports = function(grunt) {

  grunt.initConfig({
    sass_globbing: {
      target : {
        files : {
          'app/packages/vhx.scss': ['app/packages/**/styles/*.scss', '!app/packages/**/styles/guide.scss', '!app/packages/_vhx-style-template/**/*.scss']
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
    clean: ['app/private/svg-icons-renamed/', 'app/private/svg-icons-minified/'],
    fileregexrename: {
      multiColorIcons: {
        files: {
          'app/private/svg-icons-renamed/*.svg' : 'app/private/svg-icons-source/*.svg'
        },
        options: {
          replacements: [{
            pattern: /icon-set-multi-colored-cs6_/ig,
            replacement: ''
          }, {
            pattern: /\.svg/ig,
            replacement: '.colors-mono-gray-inverse-alt-light.svg'
          }]
        }
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'app/private/svg-icons-renamed',
          src: ['*.svg'],
          dest: 'app/private/svg-icons-minified'
        }]
      }
    },
    grunticon: {
      multiColor: {
        files: [{
          expand: true,
          cwd: 'app/private/svg-icons-minified',
          src: ['*.svg', '*.png'],
          dest: 'app/packages/vhx-style-icons/styles'
        }],
        options: {
          datasvgcss: 'icons.svg.scss',
          datapngcss: 'icons.png.scss',
          urlpngcss: 'icons.fallback.scss',
          cssprefix: '.icon-',
          pngfolder: 'png-icons-source',
          // TODO: this is path to output to output PNGs
          pngpath: 'png-icons-output',
          colors: {
            mono: '#375667',
            gray: '#9baab2',
            inverse: '#ffffff',
            alt: '#22b8af',
            light: '#BFBFBF'
          }
        }
      }
    },
    copy: {
      iconExtends: {
        src: 'app/packages/vhx-style-icons/styles/icons.svg.scss',
        dest: 'app/packages/vhx-style-icons/styles/icons.extends.scss',
          options: {
            process: function(content, srcpath) {
              return content.replace(/^\.icon/gm,'%icon');
            }
          }
      }
    },
    folder_list: {
      options: {
        files: true,
        folders: true
      },
      files: {
        src: ['private/svg-icons-renamed/*.svg'],
        dest: 'app/packages/vhx-style-icons/docs/icon-list.json',
        cwd: 'app/'
      }
    }
// +    concat: {
// +      dist: {
// +        src: [],
// +        dest: '../crystal/vendor/assets/stylesheets/vhx.quartz.1.0.css'
// +      }
// +    }
  });

  grunt.loadNpmTasks('grunt-file-regex-rename');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-grunticon');
  grunt.loadNpmTasks('grunt-sass-globbing');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-folder-list');

  grunt.registerTask('build-icons', ['clean', 'fileregexrename:multiColorIcons', 'svgmin', 'grunticon:multiColor']);
  grunt.registerTask('build', ['sass_globbing', 'cssmin', 'copy:iconExtends', 'sass']);
  grunt.registerTask('files', ['folder_list']);
};

module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: '../packages',
          src: '*/*.scss',
          dest: 'build',
          ext: '.css'
        }]
      }
    },
    fileregexrename: {
      multiColorIcons: {
        files: {
          'svg-icons-renamed/*.svg' : 'svg-icons-source/*.svg'
        },
        options: {
          replacements: [{
            pattern: /icon-set-multi-colored-cs6_/ig,
            replacement: ''
          }, {
            pattern: /\.svg/ig,
            replacement: '.colors-mono-gray-inverse-alt-dark-light.svg'
          }]
        }
      }
    },
    grunticon: {
      multiColor: {
        files: [{
          expand: true,
          cwd: 'svg-icons-source',
          src: ['*.svg', '*.png'],
          dest: 'svg-icons-output'
        }],
        options: {
          datasvgcss: 'icons.svg.css.scss',
          datapngcss: 'icons.png.css.scss',
          urlpngcss: 'icons.fallback.css.scss',
          cssprefix: '.icon-',
          pngfolder: '../png-icons-source',
          // TODO: this is path to output to output PNGs
          pngpath: 'png-icons-output',
          colors: {
            mono: '#375667',
            gray: '#9baab2',
            inverse: '#ffffff',
            alt: '#22b8af',
            light: '#BFBFBF',
            dark: '#111111'
          }
        }
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
  grunt.loadNpmTasks('grunt-grunticon');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('rename-icons', ['fileregexrename:multiColorIcons']);
  grunt.registerTask('generate-icons', ['grunticon:multiColor']);
  grunt.registerTask('build', ['sass']);
}

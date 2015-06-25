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
    }
// +    concat: {
// +      dist: {
// +        src: [],
// +        dest: '../crystal/vendor/assets/stylesheets/vhx.quartz.1.0.css'
// +      }
// +    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('build', ['sass']);
}
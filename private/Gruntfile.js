module.exports = function(grunt) {

  grunt.initConfig({
    // concat: {
    //   dist: {
    //     src: ['../packages/**/styles/*.scss'],
    //     dest: '../public/styles.scss'
    //   }
    // },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: '../public',
          src: '../packages/**/styles/*.scss',
          dest: '../private/build',
          ext: '.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('build', ['sass']);
}
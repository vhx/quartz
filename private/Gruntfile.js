module.exports = function(grunt) {

  grunt.initConfig({
    sass_globbing: {
      your_target: {
        files: {
          'styles/complete/vhx.css': '../packages/*/styles/*.scss'
        }
      }
    },
    sass: {
      dist: {
        files: {
          'distro/complete/vhx.css': 'styles/vhx.css'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass-globbing');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('build', ['sass_globbing', 'sass']);
}
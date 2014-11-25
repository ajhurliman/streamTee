'use strict';
module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.initConfig({
    jshint: {
      src: ['index.js'],
      options: {
        node: true
      }
    },

    jscs: {
      src: {
        src: ['index.js']
      }
    }
  }); //end initConfig

  grunt.registerTask('test', ['jscs', 'jshint']);
  grunt.registerTask('default', ['test']);
};

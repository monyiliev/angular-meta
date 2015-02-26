'use strict';

module.exports = function (grunt) {

  // Show elapsed time at the end.
  require('time-grunt')(grunt);
  // Load all grunt tasks.
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({


    // JS Hint.
    jshint: {
      all: [
        'Gruntfile.js',
        'package.json',
        'meta.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Watch.
    watch: {
      js: {
        files: ['meta.js'],
        tasks: ['jshint']
      }
    }


  });

  // Default task, e.g. "grunt".
  grunt.registerTask('default', [
    'watch'
  ]);

  grunt.registerTask('test', [
    'jshint'
  ]);

};

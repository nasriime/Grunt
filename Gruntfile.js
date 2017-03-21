module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        watch: {
          options:{
            livereload:true,
          },
          gruntFileChange:{
            files:'Gruntfile.js',
            tasks:'jade'
          },
            jade: {
                files: 'index.jade',
                tasks: 'jade',
            }

        },
        jade: {
            compile: {
                options: {
                    pretty: true,
                },
                files: {
                    'index.html': 'index.jade'
                },
            }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default',['watch']);
};

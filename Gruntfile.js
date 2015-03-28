module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

			uglify: {
				options: {
					preserveComments: 'some'
				},
				build: {
					src: 'source/jquery.responsive-menu.js',
					dest: 'source/jquery.responsive-menu.min.js'
				}
			},

			watch: {
				scripts: {
					files: ['source/*.js'],
					tasks: ['uglify'],
					options: {
						spawn: false,
					},
				}
			}

  });

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['uglify']);

	grunt.registerTask('dev', ['watch']);

};
module.exports = function(grunt) {
    grunt.initConfig({
		uncss: {
			dist: {
				src: ['src/index.html'],
				dest: 'deploy/css/tidy.min.css',
				options: {
					report: 'min'
				}
			}
		},
		processhtml: {
			dist: {
				files: {
                    'dist/index.html': 'app/index.html'
				}
			}
		}
	});
    grunt.loadNpmTasks('grunt-uncss');
    grunt.registerTask('default', ['uncss']);
};

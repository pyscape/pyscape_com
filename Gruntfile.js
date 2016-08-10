module.exports = function(grunt) {
    grunt.initConfig({
		uncss: {
			dist: {
				src: ['index.html'],
				dest: 'css/tidy.min.css',
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

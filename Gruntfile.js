module.exports = function(grunt) {
    grunt.initConfig({
		uncss: {
			dist: {
				src: ['src/index.html'],
				dest: 'deploy/css/deploy.css',
				options: {
					report: 'min',
                    ignore: [
                        '.navbar-toggle',
                        '.collapsed',
                        '.in',
                        '.nav',
                        '.nav-divider',
                        '.nav .nav-divider',
                        '.navbar-nav',
                        '.navbar-right',
                        '.navbar-inverse',
                        '.navbar-inverse .navbar-nav',
                        '.navbar-inverse .navbar-collapse',
                        '.navbar-inverse .navbar-form',
                        '.container .navbar-collaps',
                        '.navbar-collapse.in',
                        '.collapse.in'
                    ]
				}
			}
		},
        replace: {
            dist: {
                options: {
                    patterns: [{
                        match: /<link.*rel="stylesheet".*/g,
                        replacement: ''
                    },{
                        match: /<script.*src=.*/g,
                        replacement: ''
                    },{
                        match: 'pyscapeCSS',
                        replacement: function() {
                            return grunt.file.read('deploy/css/deploy.css')
                        }
                    },{
                        match: 'pyscapeJS',
                        replacement: function() {
                            return grunt.file.read('deploy/js/deploy.min.js')
                        }
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['src/index.html'],
                    dest: 'deploy/'
                }]
            }
        }
	});
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-replace');
    grunt.registerTask('default', ['uncss', 'replace']);
};

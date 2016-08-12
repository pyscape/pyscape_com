module.exports = function(grunt) {
    grunt.initConfig({
		uncss: {
			dist: {
				src: ['src/index.html', 'src/services.html'],
				dest: 'deploy/css/deploy.css',
				options: {
					report: 'min',
                    ignore: [
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
                    src: ['src/index.html', 'src/services.html'],
                    dest: 'deploy/'
                }]
            }
        },
        sitemap: {
            dist: {
                pattern: ['*.html'],
                siteRoot: ''
            }
        }
	});
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-sitemap');
    grunt.registerTask('default', ['uncss', 'replace', 'sitemap']);
};

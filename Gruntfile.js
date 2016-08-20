module.exports = function(grunt) {
    grunt.initConfig({
        uncss: {
            dist: {
                src: ['src/index.html'],
                dest: 'deploy/css/deploy.css',
                options: {
                    report: 'min',
                    ignore: [
                        '.collapse.in',
                        '.owl-carousel .owl-stage',
                        '.owl-carousel .owl-item',
                        '.owl-carousel.owl-loaded',
                        '.no-js .owl-carousel',
                    ]
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: true,
                roundingPrecision: -1
            },
            target: {
                files: {
                'deploy/css/deploy.min.css': ['deploy/css/deploy.css']
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
                            return grunt.file.read('deploy/css/deploy.min.css')
                        }
                    },{
                        match: 'owlJS',
                        replacement: function() {
                            return grunt.file.read('src/js/owl.carousel.min.js')
                        }
                    },{
                        match: 'indexJS',
                        replacement: function() {
                            return grunt.file.read('src/js/index.min.js')
                        }
                    },{
                        match: 'trackingJS',
                        replacement: function() {
                            return grunt.file.read('src/js/tracking.min.js')
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
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-sitemap');
    grunt.registerTask('default', ['uncss', 'cssmin',  'replace', 'sitemap']);
};

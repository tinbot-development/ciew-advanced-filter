module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: { mangle: false },
			advanced_filter: {
				files: [{
		          expand: true,
		          cwd: 'assets',
		          src: ['**/*.js','!**/*.min.js'],
		          dest: 'assets',
		          ext: '.min.js',
		          extDot: 'last'
		      }],
			},
		},

		watch: {
			advanced_filter: {
				files: ['assets/js/*.js','!assets/js/*.min.js','readme.txt'],
				tasks: ['uglify:advanced_filter','wp_readme_to_markdown']
			}
		},

		wp_readme_to_markdown: {
			your_target: {
				files: {
					'readme.md': 'readme.txt'
				},
			},
		},

		dirs: {
			lang: 'languages'
		},

		// Convert the .po files to .mo files
		potomo: {
			dist: {
				options: {
					poDel: false
				},
				files: [{
					expand: true,
					cwd: '<%= dirs.lang %>',
					src: ['*.po'],
					dest: '<%= dirs.lang %>',
					ext: '.mo',
					nonull: true
				}]
			}
		},

		// Pull in the latest translations
		exec: {
			transifex: 'tx pull -a',

			// Create a ZIP file
			zip: 'python /usr/bin/git-archive-all ../gravityview-advanced-filter.zip'
		}

	});


	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-wp-readme-to-markdown');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-potomo');
	grunt.loadNpmTasks('grunt-exec');


	grunt.registerTask( 'default', ['uglify','exec:transifex','potomo','watch'] );

};
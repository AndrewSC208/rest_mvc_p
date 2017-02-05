var gulp = require('gulp'),
	nodemon = require('gulp-nodemon');

// create default task:
gulp.task('default', function() {
	nodemon({
		script: 'index.js',
		ext: 'js',
		env: {
			PORT:8000
		},
		ignore: ["./node_modules/**"]
	})
	.on('resart', function() {
		console.log('resarted');
	});
});
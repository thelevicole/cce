const gulp		= require('gulp');
const babel		= require('gulp-babel');
const minify	= require('gulp-babel-minify');

// Paths
const source	= './src';
const output	= './dist';

// Build JS
gulp.task('default', function() {
	return gulp.src(`${source}/cce.js`)
		.pipe( babel({
			'presets': [
				['@babel/env', {
					'targets': {
						'browsers': ['last 2 version', '> 1%', 'ie 8', 'ie 7']
					}
				}]
			]
		}) )
		.on( 'error', console.error.bind( console ) )
		.pipe( minify() )
		.pipe( gulp.dest(output) );
});
'use strict';

// Generic
const gulp       = require( 'gulp' );

// Stylesheets
const sass         = require( 'gulp-sass' );
const autoprefixer = require( 'gulp-autoprefixer' );

// Javascripts
const babel  = require( 'gulp-babel' );
const minify = require( 'gulp-babel-minify' );

// Browser support
const browsers = [ 'last 2 version', '> 1%', 'ie 8', 'ie 7' ];

// Paths
const paths = {
	input: {
		stylesheets: [ './sass/**/*.scss' ],
		javascripts: [ './js/**/*.js', '!./js/min/**/*' ]
	},
	output: {
		stylesheets: './css',
		javascripts: './js/min'
	}
}

// Process javascript
gulp.task('javascripts', function() {
	return gulp.src( paths.input.javascripts )
		.pipe( babel({
			'presets': [
				['@babel/env', {
					'targets': {
						'browsers': browsers
					}
				}]
			]
		}) )
		.on( 'error', console.error.bind( console ) )
		.pipe( minify() )
		.pipe( gulp.dest( paths.output.javascripts ) );
});

// Process stylesheets
gulp.task('stylesheets', function() {
    return gulp.src( paths.input.stylesheets )
        .pipe( sass({
            outputStyle: 'compressed'
        }).on( 'error', sass.logError ) )
        .pipe( autoprefixer({
            browsers: browsers
        }) )
        .pipe( gulp.dest( paths.output.stylesheets ) );
});

gulp.task('watch', function() {

	gulp.watch(paths.input.stylesheets, ['stylesheets']);
	gulp.watch(paths.input.javascripts, ['javascripts']);

});

// Gulp default process
gulp.task('default', ['stylesheets', 'javascripts']);
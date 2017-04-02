'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var browserifyShim = require('browserify-shim');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');

module.exports = gulp.task('browserify', function(){

	console.log('browserify');

	return browserify({entries: [config.src.modules]})
		.transform(browserifyShim)
		.bundle()
		.pipe(source('build.js'))
		.pipe(gulp.dest(config.build.modules))
})
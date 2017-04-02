'use strict'

var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

module.exports = gulp.task('styles', function(){
	console.log('change of styles');
	console.log('src', config.src.styles);
	console.log('dest', config.build.styles);
	return gulp.src(config.src.styles)
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('style.css'))
		.pipe(gulp.dest(config.build.styles))
});
'use strict'

var gulp = require('gulp');

module.exports = gulp.task('assets', function(){
	return gulp.src(config.src.index)
		.pipe(gulp.dest(config.build.index))
})
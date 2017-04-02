'use strict'

var gulp = require('gulp');

module.exports = gulp.task('assetsStyleLib', function(){
	return gulp.src(config.src.styleLib)
		.pipe(gulp.dest(config.build.styles))
})
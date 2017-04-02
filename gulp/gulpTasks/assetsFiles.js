'use strict'

var gulp = require('gulp');

module.exports = gulp.task('assetsFiles', function(){
	return gulp.src(config.src.files)
		.pipe(gulp.dest(config.build.files))
})
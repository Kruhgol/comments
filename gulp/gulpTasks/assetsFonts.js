'use strict'

var gulp = require('gulp');

module.exports = gulp.task('assetsFonts', function(){
	return gulp.src(config.src.fonts)
		.pipe(gulp.dest(config.build.fonts))
})
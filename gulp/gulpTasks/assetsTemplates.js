'use strict'

var gulp = require('gulp');

module.exports = gulp.task('assetsTemplates', function(){
	return gulp.src(config.src.templates)
		.pipe(gulp.dest(config.build.templates))
})
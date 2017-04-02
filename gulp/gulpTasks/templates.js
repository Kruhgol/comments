'use strict'

var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var header = require('gulp-header');

module.exports = gulp.task('templates', function(){
	return gulp.src(config.src.templates)
		.pipe(templateCache({ standalone: true }))
		.pipe(header('module.exports = '))
		.pipe(gulp.dest(config.src.templatesCompiled))
})

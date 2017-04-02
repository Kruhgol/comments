'use strict'

var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var header = require('gulp-header');
var concat = require('gulp-concat');

module.exports = gulp.task('templatesDirective', function(){
	return gulp.src(config.src.templatesDirective)
		.pipe(templateCache())
		.pipe(header('module.exports = '))
        .pipe(concat('templatesDirective.js'))
		.pipe(gulp.dest(config.src.templatesCompiled))
})

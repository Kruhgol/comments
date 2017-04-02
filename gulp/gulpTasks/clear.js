'use strict'

var gulp = require('gulp');
var del = require('del');

module.exports = gulp.task('clear', function(){
	console.log('clear folder');
	return del(BUILD_FOLDER['BUILD_FOLDER/static','BUILD_FOLDER/templates']);
});

'use strict'

var gulp = require('gulp');
var runSequence = require('run-sequence')

module.exports = gulp.task('default', function() {
	runSequence('clear',['templates','assets','images','styles','assetsStyleLib','assetsFonts'],'browserify','watch')
});
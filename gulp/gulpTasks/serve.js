'use strict';

var gulp = require('gulp');
var connect = require('connect')
var staticServer = connect();

module.exports = gulp.task('serve', function(){
	console.log('______________________________________________________');	
	var staticServerPath = BUILD_FOLDER;
	staticServer.use(connect.static(staticServerPath)).listen(1337);
	console.log('serve - 1337');
})
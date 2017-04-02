'use strict'

var gulp = require('gulp');
var watch = require('gulp-watch');

module.exports = gulp.task('watch', function(){
    gulp.watch(config.src.styles, ['styles']);
    gulp.watch(config.src.templates, ['templates','browserify']);
    gulp.watch(config.src.styles, ['styles']);
    gulp.watch(config.src.js, ['browserify']);
    gulp.watch(config.src.index, ['assets']);
    // gulp.watch(config.src.templatesDirective, ['templatesDirective']);
    // gulp.watch(config.src.templatesCompiledBrowserify, ['browserify']);
})



// module.exports = gulp.task('watch', function(){

// })

    // watch([config.src.js], ['browserify']);
    // watch([config.src.templates], ['templates']);
    // watch([config.src.templatesDirective], ['templatesDirective']);
    // watch([config.src.templatesCompiled], ['browserify']);
"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();



gulp.task('sass', function(){
  return gulp.src('./src/scss/style.scss')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(sass()) // Using gulp-sass
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})
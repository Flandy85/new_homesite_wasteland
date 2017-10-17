"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();



gulp.task('sass', function(){
  return gulp.src('./src/scss/style.scss')
    .pipe(sass()) // Using gulp-sass
    // .pipe(browserSync.reload({
    //   stream: true
    // }))
    .pipe(gulp.dest('./dist/css'))
});

// gulp.task('browserSync', function() {
//   browserSync.init({
//     server: {
//       baseDir: './'
//     },
//   })
// })

gulp.task('scripts', function() {
  return gulp.src('./src/js/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', ['sass', 'scripts'], function (){
  gulp.watch('./src/scss/style.scss', ['sass']); 
  gulp.watch('src/js/**/*.js', ['scripts']);
  // gulp.watch('gulp1/*.html', browserSync.reload);
  // Other watchers
});
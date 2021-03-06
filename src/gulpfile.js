/**
 * @file
 * Gulp file to compile the SASS files into CSS.
 */

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('../dist/css'));
});

gulp.task('default', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

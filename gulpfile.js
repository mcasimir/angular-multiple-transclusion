(function(){
  'use strict';

  var gulp   = require('gulp'),
      uglify = require('gulp-uglify'),
      rename = require('gulp-rename');

  gulp.task('build', function() {
    return gulp.src('src/angular-multiple-transclusion.js')
      .pipe(gulp.dest('dist'))
      .pipe(uglify())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('dist'));
  });

}());

var gulp = require('gulp');
var less = require('gulp-less');
var jade = require('gulp-jade');
var path = require('path');
var plumber = require('gulp-plumber');

gulp.task('less', function () {
    return gulp.src('../src/**/*.less')
    .pipe(plumber())
      .pipe(less({
          paths: [path.join(__dirname, 'less', 'includes')]
      }))
      .pipe(gulp.dest('../dist/less/'));
});

gulp.task('js', function () {
    return gulp.src('../src/**/*.js') // Get source files with gulp.src
        .pipe(gulp.dest('../dist/js/')) // Outputs the file in the destination folder
})

 
gulp.task('fragments', function() { 
  gulp.src('../src/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('../dist/fragments/'))
});

gulp.task('generate', ['less', 'js', 'fragments']);
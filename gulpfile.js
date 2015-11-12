var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('styles', function () {
  return gulp.src(['./src/styles/site.less'])
    .pipe(less())
    .pipe(gulp.dest('./wwwroot/styles/'));
});

gulp.task('html', function () {
  return gulp.src(['./src/index.html'])
    .pipe(gulp.dest('./wwwroot/'));
});

gulp.task('default', ['html', 'styles']);

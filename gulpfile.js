var gulp = require('gulp');

gulp.task('default', function () {
  return gulp.src(['./src/index.html'])
    .pipe(gulp.dest('./wwwroot/'));
});

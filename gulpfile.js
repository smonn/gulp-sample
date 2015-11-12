var gulp = require('gulp');
var del = require('del');
var rename = require('gulp-rename');
var less = require('gulp-less');
var cssMinify = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var gls = require('gulp-live-server');

gulp.task('styles:clean', function () {
  return del(['./wwwroot/styles/**/*']);
});

gulp.task('styles:watch', function () {
  return gulp.watch(['./src/styles/site.less'], ['styles']);
});

gulp.task('styles', ['styles:clean'], function () {
  return gulp.src(['./src/styles/site.less'])
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(gulp.dest('./wwwroot/styles/'))
    .pipe(cssMinify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./wwwroot/styles/'));
});

gulp.task('scripts:watch', function () {
  return gulp.watch(['./src/scripts/**/*.js'], ['scripts']);
});

gulp.task('scripts:clean', function (){
  return del(['./wwwroot/scripts/**/*.js']);
});

gulp.task('scripts', ['scripts:clean'], function () {
  return gulp.src(['./src/scripts/**/*.js'])
    .pipe(gulp.dest('./wwwroot/scripts/'));
});

gulp.task('html:watch', function () {
  return gulp.watch(['./src/**/*.html'], ['html']);
});

gulp.task('html:clean', function (){
  return del(['./wwwwroot/**/*.html']);
});

gulp.task('html', ['html:clean'], function () {
  return gulp.src(['./src/index.html'])
    .pipe(gulp.dest('./wwwroot/'));
});

gulp.task('server', ['watch'], function () {
  var server = gls.new('index.js');
  server.start();

  gulp.watch(['wwwroot/**/*.html', 'wwwroot/**/*.css', 'wwwroot/**/*.css.map', 'wwwroot/**/*.js'], function (file) {
    server.notify.apply(server, [file]);
  });

  gulp.watch('index.js', server.start.bind(server));
});

gulp.task('watch', ['html:watch', 'styles:watch', 'scripts:watch']);
gulp.task('default', ['html', 'styles', 'scripts']);

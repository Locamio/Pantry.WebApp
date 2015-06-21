'use strict';

var gulp = require('gulp'),
	webpack = require('webpack'),
	webpackLogger = require('webpack-gulp-logger'),
	libWebpackConfig = require('./webpack.config'),
	mainWebpackConfig = require('./webpack.main.config');

gulp.task('default', [
  'watch'
]);

gulp.task('watch', [
  'watch-lib',
  'watch-main'
]);

gulp.task('build', [
  'build-lib',
  'build-main'
]);

gulp.task('watch-lib', function() {
  webpack(libWebpackConfig).watch({}, webpackLogger());
});

gulp.task('watch-main', function() {
  webpack(mainWebpackConfig).watch({}, webpackLogger());
});

gulp.task('build-lib', function(callback) {
  webpack(libWebpackConfig).run(webpackLogger(callback));
});

gulp.task('build-main', function(callback) {
  webpack(mainWebpackConfig).run(webpackLogger(callback));
});
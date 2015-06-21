var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    watch = require('gulp-watch'),
    riot = require('gulp-riot');

// var config = {
//     //Include all js files but exclude any min.js files
//     src: ['src.js/**/*.js', '!src.js/**/*.min.js'],
//     riot: ['riot.src/**/*.tag']
// }

// // Compile TypeScript
// gulp.task('compile', function () {
//     var tsResult = gulp.src('typescript.src/**/*.ts')
//       .pipe(ts({
//           noImplicitAny: true,
//           out: 'src.js/ts.output.js'
//       }));
//     return tsResult.js.pipe(gulp.dest('built/local'));
// });

// // Synchronously delete the output file(s)
// gulp.task('clean', function () {
//     del.sync(['build/all.min.js']);
// });

// // Combine and minify all files from the app folder
// gulp.task('scripts', ['clean'], function () {
//     return gulp.src(config.src)
//       .pipe(uglify())
//       .pipe(concat('all.min.js'))
//       .pipe(gulp.dest('build/'));
// });

// //Set a default tasks
// gulp.task('default', ['scripts'], function () {
// });

// //Set Riot task
// gulp.task('riot', function () {
//     return gulp.src(config.riot)
//         .pipe(riot())
//         .pipe(gulp.dest('build'));
// })

// //Set Watch task
// gulp.task('watch', function () {
//     gulp.watch(config.src, ['scripts']);
//     gulp.watch(config.riot, ['riot']);
// });
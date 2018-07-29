var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('bootstrap', function() {
	return gulp.src('./node_modules/bootstrap/less/**/**')
	  .pipe(gulp.dest(('src/less/bootstrap/')));
});

gulp.task('less', function () {
	gulp.src('src/less/*.less')
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(cssnano())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('public/css/'));
});
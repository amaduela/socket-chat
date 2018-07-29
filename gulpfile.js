var gulp = require('gulp');
var sass = require('gulp-less');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('bootstrap', function() {
	return gulp.src('./node_modules/bootstrap/less/**/**')
	  .pipe(gulp.dest(('src/less/bootstrap/')));
});
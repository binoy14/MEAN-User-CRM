var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('lint', function(){
	return gulp.src('app/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('fail'));
});

gulp.task('default', ['lint']);
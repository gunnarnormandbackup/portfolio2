const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const src = {
  html: './**/*.html',
  all: './assets/**/*.*'
}

gulp.task('default', () => {

	browserSync.init({server: "./"});
  gulp.watch(src.html).on('change', browserSync.reload)
  gulp.watch(src.all).on('change', browserSync.reload)
});

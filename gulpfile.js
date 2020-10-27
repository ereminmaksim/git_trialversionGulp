let gulp = require('gulp');
let sass = require('gulp-sass');
let csso = require('gulp-csso');
let cleanCSS = require('gulp-clean-css');


 gulp.task('scss', function(){
  return gulp.src('app/scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('app/css'))
 });


 
 gulp.task('minify-css', () => {
    return gulp.src('app/scss/**/*.scss')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('styles_minify'));
  });
const gulp = require('gulp');
const sass = require('gulp-sass');


function compileSass() {
  return gulp
    .src('src/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
}


function watchSass() {
  gulp.watch('src/scss/**/*.scss', compileSass);
}


gulp.task('default', gulp.series(compileSass, watchSass));

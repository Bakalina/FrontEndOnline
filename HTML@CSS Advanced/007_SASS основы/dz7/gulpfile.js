let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', function(){
    gulp.src('./**/*.scss').pipe(sass()).pipe(gulp.dest('./'))
})
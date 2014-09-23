var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var glob = require('glob');

gulp.task('js', function() {
    return gulp.src('files/js/*js')
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
});
// с ним мы не подружились

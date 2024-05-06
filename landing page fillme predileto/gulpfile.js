const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');

function htmlComp() {
    return gulp.src('./src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'))
}

function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/styles'));
}

function images() {
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

function scriptsComp() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'));
}

exports.default = gulp.parallel(styles, images, scriptsComp, htmlComp);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/scripts/*.js', gulp.parallel(scriptsComp));
    gulp.watch('./src/*.html', gulp.parallel(htmlComp));
}
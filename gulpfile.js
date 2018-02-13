var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoPrefixer = require('gulp-autoprefixer');
//if node version is lower than v.0.1.2
require('es6-promise').polyfill();
var cssComb = require('gulp-csscomb');
var cmq = require('gulp-merge-media-queries');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pug = require('gulp-pug');
var imageMin = require('gulp-imagemin');
var cache = require('gulp-cache');
var notify = require('gulp-notify');
gulp.task('sass',function(){
    gulp.src(['src/assets/sass/**/*.sass'])
        .pipe(sass())
        .pipe(autoPrefixer())
        .pipe(cssComb())
        .pipe(cmq({log:true}))
        .pipe(gulp.dest('dist/assets/styles'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/assets/styles'))
        .pipe(browserSync.stream())
        .pipe(notify('css task finished'))
});
gulp.task('js',function(){
    gulp.src(['src/assets/js/**/*.js'])
        .pipe(gulp.dest('dist/assets/scripts/'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/scripts/'))
        .pipe(browserSync.stream())
          .pipe(notify('js task finished'))
});
gulp.task('pug',function(){
    gulp.src(['template/**/*.pug'])
        .pipe(pug())
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream())
        .pipe(notify('html task finished'))
});
gulp.task('image',function(){
    gulp.src(['src/assets/images/**/*'])
        .pipe(cache(imageMin()))
        .pipe(gulp.dest('dist/assets/images'))
        .pipe(browserSync.stream())
        .pipe(notify('image task finished'))
});
gulp.task('default',['pug', 'sass', 'js', 'image'] , function(){
    browserSync.init({
        server: "./dist"
    });
    gulp.watch('src/assets/js/**/*.js',['js']);
    gulp.watch('src/assets/sass/**/*.sass',['sass']);
    gulp.watch('template/**/*.pug',['pug']);
    gulp.watch('src/assets/images/**/*',['image']);
});

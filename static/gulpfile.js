/* global require 	*/
/* jshint -W097 	*/
'use strict';

// ==============
// IMPORTS
// ==============
var gulp = require('gulp');
var del = require('del');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var sequence = require('run-sequence');
var rename = require('gulp-rename');

// ==============
// VARIABLES
// ==============
var js_src = './client/js/main.jsx';
var scss_src = './client/scss/main.scss';
var views_src = './client/views/*.html';
var index_src = './client/index.html';
var js_dest = './build/js/';
var scss_dest = './build/css/';
var views_dest = './build/views';
var index_dest = './build';

// ==============
// TASKS
// ==============
gulp.task('clean', function() {
    return del(['build/**/*']);
});

gulp.task('clean:assets', function() {
    return del(['build/views/*', 'build/index.html']);
});

gulp.task('sass', function() {
    return gulp.src(scss_src)
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss())
        .pipe(gulp.dest(scss_dest));
});

gulp.task('views', function() {
    return gulp.src(views_src)
        .pipe(gulp.dest(views_dest));
});
gulp.task('index', function() {
    return gulp.src(index_src)
        .pipe(gulp.dest(index_dest));
});
gulp.task('copy', function() {
    sequence('clean:assets', ['views', 'index']);
});

gulp.task('js', function() {
    // set up the browserify instance on a task basis
    var b = browserify({
        entries: js_src,
        debug: true
    });

    // configure babel transpiler
    var babelConf = {
        'presets': ['es2015'],
        'extensions': ['.jsx']
    };

    return b.transform('babelify', babelConf)
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        // Add transformation tasks to the pipeline here.
        //.pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(js_dest));
});

gulp.task('watch', function() {
	gulp.watch(['client/js/**/*.jsx'], ['js']);
	gulp.watch(['client/scss/*.scss'], ['sass']);
	gulp.watch(['client/views/*.html', 'client/index.html'], ['copy']);
});

gulp.task('default', function() {
    sequence('clean', ['sass', 'js', 'copy']);
});

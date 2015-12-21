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
var flatten = require('gulp-flatten');

// ==============
// VARIABLES
// ==============
var js_src = './client/js/main.jsx';
var scss_src = './client/scss/main.scss';
var views_src = './client/**/*View.html';
var index_src = './client/index.html';
var js_dest = './build/js/';
var scss_dest = './build/css/';
var views_dest = './build/views';
var index_dest = './build';

// ==============
// TASKS
// ==============
/**
 * Ripulisce la directory build
 */
gulp.task('clean', function() {
    return del(['build/**/*']);
});

/**
 * Come clean, ma cancella SOLO i file copiati,
 * non quelli compilati
 */
gulp.task('clean:assets', function() {
    return del(['build/views/*', 'build/index.html']);
});

/**
 * Compila e minifica i fogli di stile .scss
 */
gulp.task('sass', function() {
    return gulp.src(scss_src)
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss())
        .pipe(gulp.dest(scss_dest));
});

/**
 * Copia le views nella cartella build
 */
gulp.task('views', function() {
    return gulp.src(views_src)
        .pipe(flatten())
        .pipe(gulp.dest(views_dest));
});
/**
 * Copia index.html nella cartella build
 */
gulp.task('index', function() {
    return gulp.src(index_src)
        .pipe(gulp.dest(index_dest));
});
/**
 * Esegue tutti i task relativi agli asset
 */
gulp.task('copy', function() {
    sequence('clean:assets', ['views', 'index']);
});

/**
 * Ubertask javascript:
 * + (Trans)compila js dalla versione ES6 a ES5 usando babel.
 * + Risolve le dipendenze e compila tutto in un unico
 * 		file bundle usando browserify.
 * + Minifica il bundle con uglify, se no ci troviamo con un
 * 		mostro enorme da caricare via HTTP.
 */
gulp.task('js', function() {
    // set up the browserify instance on a task basis
    var b = browserify({
        entries: js_src,
        debug: true
    });

    // configura babel transpiler
    var babelConf = {
        'presets': ['es2015'],
        'extensions': ['.jsx', '.js']
    };

    return b
        .transform('babelify', babelConf)	// Transpiler
        .bundle() 				// Infagotta tutto
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({			// Genera sourcemaps
            loadMaps: true
        }))
        // Add transformation tasks to the pipeline here.
        //.pipe(uglify())			// Minifica (ci mette un sacco)
        .on('error', gutil.log)			// Logga errori
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(js_dest));
});

/**
 * Monitora i file ed esegui i task appropriati
 * ad ogni cambiamento
 */
gulp.task('watch', function() {
	gulp.watch(['client/js/**/*.jsx'], ['js']);
	gulp.watch(['client/scss/*.scss'], ['sass']);
	gulp.watch(['client/views/*.html', 'client/index.html'], ['copy']);
});

/**
 * build task: esegui tutti i task tranne watch
 */
gulp.task('build', function() {
    sequence('clean', ['sass', 'js', 'copy']);
});

/**
 * default task: esegui tutti i task e infine watch
 */
gulp.task('default', function() {
    sequence('clean', ['sass', 'js', 'copy'], 'watch');
});

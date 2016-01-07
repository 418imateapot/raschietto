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
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var sequence = require('run-sequence');
var rename = require('gulp-rename');
var flatten = require('gulp-flatten');
var tsd = require('gulp-tsd');
var documentation = require('gulp-documentation');
var shell = require('gulp-shell');

// ==============
// VARIABLES
// ==============
var js_src = './client/js/main.js';
var scss_src = './client/scss/main.scss';
var views_src = './client/js/**/*.html';
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
 * + Risolve le dipendenze e compila tutto in un unico
 * 		file bundle usando browserify.
 */
gulp.task('js:libs', function() {
    // set up the browserify instance on a task basis
    var b = browserify({
        entries: [
            './node_modules/jquery/dist/jquery.js',
            './node_modules/angular/angular.js',
            './node_modules/angular-animate/angular-animate.js',
            './node_modules/angular-cookies/angular-cookies.js',
            './node_modules/angular-foundation/mm-foundation.js',
            './node_modules/angular-foundation/mm-foundation-tpls.js',
            './node_modules/angular-ui-router/build/angular-ui-router.js'
        ],
        debug: true
    });

    return b
        .bundle() // Infagotta tutto
        .pipe(source('vendor.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ // Genera sourcemaps
            loadMaps: true
        }))
        // Add transformation tasks to the pipeline here.
        //.pipe(uglify())			// Minifica (ci mette un sacco)
        .on('error', gutil.log) // Logga errori
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(js_dest));
});
gulp.task('js:app', function() {
    // set up the browserify instance on a task basis
    var b = browserify({
        entries: js_src,
        debug: true,
        bundleExternal: false
    });

    // configura babel transpiler
    var babelConf = {
        'presets': ['es2015'],
        'extensions': ['.js']
    };

    return b
        .transform('babelify', babelConf) // Transpiler
        .bundle() // Infagotta tutto
        .pipe(source('app.js'))
        .pipe(gulp.dest(js_dest))
        .pipe(rename('app.min.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ // Genera sourcemaps
            loadMaps: true
        }))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify()) // Minifica (ci mette un sacco)
        .on('error', gutil.log) // Logga errori
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(js_dest));
});
/**
 * Installa le type defintions utili per i plugin
 * di autocompletmaento semantico
 */
gulp.task('tsd', function(callback) {
    tsd({
        command: 'reinstall',
        config: './tsd.json'
    }, callback);
});
gulp.task('js', ['js:app']);
gulp.task('js:all', ['js:app', 'js:libs']);

/**
 * Monitora i file ed esegui i task appropriati
 * ad ogni cambiamento
 */
gulp.task('watch', function() {
    gulp.watch(['client/js/**/*.js'], ['js']);
    gulp.watch(['client/scss/*.scss'], ['sass']);
    gulp.watch(['client/js/**/*.html', 'client/index.html'], ['copy']);
});

/**
 * build task: esegui tutti i task tranne watch
 */
gulp.task('build', function() {
    sequence('clean', ['sass', 'js:all', 'copy']);
});

/**
 * doc task: Genera la documentazione
 */
gulp.task('docs', shell.task([
    'node_modules/jsdoc/jsdoc.js ' +
    '-c ./node_modules/angular-jsdoc/common/conf.json ' + // config file
    '-t ./node_modules/angular-jsdoc/angular-template ' + // template file
    '-d ../doc/client ' + // output directory
    '../README.md ' + // to include README.md as index contents
    '-r ./client/js' // source code directory
]));
gulp.task('doc', shell.task([
    './node_modules/.bin/jsdoc ' +
    './client/**/* ' +
    '-r -d ../doc/client ' +
    '-c ../doc/jsdoc-conf.json'
]));

/**
 * default task: esegui tutti i task e infine watch
 */
gulp.task('default', function() {
    sequence('clean', ['sass', 'js:libs', 'js:app', 'copy'], 'watch');
});

'use strict';

const gulp = require('gulp'),
	  concat = require('gulp-concat'),
	  minCss = require('gulp-minify-css'),
	  rename = require('gulp-rename'),
	  uglify = require('gulp-uglify'),
      gutil = require('gulp-util'),
      babel = require('gulp-babel'),
	  stripDebug = require('gulp-strip-debug');

gulp.task('doIt', () => {
    //Concat and Minify CSS
    gulp.src(['./public/css/normalize.css',
    		  './public/css/bulma.css',
              './public/css/animate.css',
    		  './public/css/index.css'])
        .pipe(concat('build.css'))
        //.pipe(sourcemaps.init())
        .pipe(minCss({
            keepSpecialComments: 0
        }))
        //.pipe(sourcemaps.write('.'))
        .pipe(rename('build.min.css'))
        .pipe(gulp.dest('./public/css'));

    //Combine JS Files
    gulp.src(['./public/js/particles.js',
    		   './public/js/script.js'])
        .pipe(babel({
            presets: ['env']
            }))
        .pipe(concat('bundle.js'))
        .pipe(stripDebug())
        .pipe(uglify())
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
 // Minifies the concatenated js file.
        .pipe(rename('bundle.min.js'))
        .pipe(gulp.dest('./public/js'));
});
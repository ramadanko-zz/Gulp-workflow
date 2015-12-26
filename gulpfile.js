
// bring the gulp library and assign it to this variable
var
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    coffee = require('gulp-coffee'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat')
    ;

var coffeeSources = ['components/coffee/tagline.coffee'];

var jsSources = [
    'components/scripts/rclick.js',
    'components/scripts/pixgrid.js',
    'components/scripts/tagline.js',
    'components/scripts/template.js'
];

var sassSources = ['components/sass/style.scss'];

gulp.task('log', function () {
    gutil.log('Work flows are awesome!');
});

gulp.task('coffee', function () {
    //process array of file or an individual file
    gulp.src( coffeeSources )
        .pipe(
            coffee({bare: true})
                .on('error', gutil.log ) )
        .pipe( gulp.dest('components/scripts') )// where we want to send the file once the oprocess is done
        // send what we got from the src method or pipe to the coffee
    ;
});

gulp.task('js', function () {
    gulp.src(jsSources)
        .pipe( concat('script.js') )
        .pipe( browserify() )
        .pipe(gulp.dest('builds/development/js'))
});

gulp.task('compass', function () {
    gulp.src( sassSources )
        .pipe( compass({
            sass: 'components/sass',
            image: 'builds/development/images',
            style: 'expanded',
            comments: true
        })
            /*.on( 'error', gutil.log )*/)
        .pipe( gulp.dest('builds/development/css') )
});

// bring the gulp library and assign it to this variable
var
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee')
    ;

var coffeeSources = ['components/coffee/tagline.coffee'];

gulp.task('log', function () {
    gutil.log('Work flows are awesome!');
});

gulp.task('coffee', function () {
    //process array of file or an individual file
    gulp.src( coffeeSources )
        .pipe(
            coffee({bare: true})
                .on('error', gutil.log ))
        .pipe( gulp.dest('components/scripts') )// where we want to send the file once the oprocess is done
        // send what we got from the src method or pipe to the coffee
    ;
});



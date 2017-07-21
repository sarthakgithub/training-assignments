

var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('bundle',function(){
    console.log('bundle executed');
    gulp.src('./!**!/!*.js').pipe(browserify()).pipe(gulp.dest("./bundle.js"));
})

gulp.task('mytask', function(){
    console.log("My Task!!!");
})

gulp.task('default', function(){console.log("DEFAULT");
    gulp.watch("./**/*.js",["bundle"]);
})

//
//var gulp = require('gulp');
//var browserify = require('gulp-browserify');
//
//// Basic usage
//gulp.task('scripts', function() {
//    // Single entry point to browserify
//    gulp.src('src/js/app.js')
//        .pipe(browserify({
//            insertGlobals : true,
//            debug : !gulp.env.production
//        }))
//        .pipe(gulp.dest('./build/js'))
//});
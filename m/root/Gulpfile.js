var version = 1

var gulp = require('../../node_modules/gulp'),
    connect = require('../../node_modules/gulp-connect'),
    watch = require('../../node_modules/gulp-watch'),
    minifycss = require('../../node_modules/gulp-minify-css'),
    concat = require('../../node_modules/gulp-concat'),
    uglify = require('../../node_modules/gulp-uglify'),
    rename = require('../../node_modules/gulp-rename'),
    compass = require('../../node_modules/gulp-compass');
gulp.task('connect',function(){
    connect.server({
        port : 1234,
        root : '',
        livereload : true
    });
});
//监控html
gulp.task('html',function(){
    gulp.src('*.html')
        .pipe(connect.reload());
});
//编译sass
gulp.task('compass',function(){
    gulp.src('sass/style.scss')
      .pipe(compass({
         config_file: './config.rb',
      }))
      .on('error',function(err){
        console.log(err);
      })
      .pipe(gulp.dest('css'))
      .pipe(connect.reload());
});
gulp.task('watch',function(){
    gulp.watch(['*.html'],['html']);
    gulp.watch(['sass/style.scss'],['compass']);
});
gulp.task('default',['connect','html','compass','watch']);
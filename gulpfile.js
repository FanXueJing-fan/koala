const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const minifyCSS =require('gulp-minify-css');
const rename = require("gulp-rename");
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const connect = require('gulp-connect');

gulp.task('copy-html', function(){
    return gulp.src('*.html')
    .pipe(htmlmin({
        removeEmptyAttibutes: true, // 移出所有空属性
        collapseWhitespace: true, // 压缩 html
      }))
      .pipe(gulp.dest('dist/'))
    .pipe(connect.reload());

})

gulp.task('images', function(){
    return gulp.src('images/**/*.{jpg,png,ico}')
    .pipe(gulp.dest('dist/images'))
    .pipe(connect.reload());

})

gulp.task('data', function(){
    return gulp.src('data/*.json')
    .pipe(gulp.dest('dist/data'))
    .pipe(connect.reload());

})

gulp.task('scripts', function(){
    return gulp.src('js/*.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());

})

gulp.task('sass', function(){
    return gulp.src('stylesheet/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());

})

gulp.task('iconfont', function(){
    return gulp.src('iconfont/*.{css,js}')
    .pipe(gulp.dest('dist/iconfont'))
    .pipe(connect.reload());

})
gulp.task('build', ['copy-html', 'images', 'data'], function(){
    console.log('项目创建成功');
})

gulp.task('watch', function(){
    gulp.watch('*.html',['copy-html']);
    gulp.watch('images/**/*.{jpg,png,ico}',['images']);
    gulp.watch('data/*.json',['data']);
    gulp.watch('js/*.js',['scripts']);
    gulp.watch('stylesheet/*.scss',['sass']);
    gulp.watch('iconfont/*.{css,js}',['iconfont']);
})

gulp.task('server', function(){
    connect.server({
        root:'dist',
        port:5634,
        livereload:true
    })
})
gulp.task('default', ['watch', 'server']);

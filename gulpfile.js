var gulp = require('gulp');
var del = require('del');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

var pugData = require('./src/views/includes/data/data-en')();


var config = {
    base: {
        src: './src/',
        dist: './dist/'
    },
    dist: {
        css: './dist/css/',
        js: './dist/js/'
    },
    pug: {
        all: './src/views/event/*.pug',
        dest: './dist/'
    },
    sass: {
        all: './src/styles/**/*.scss',
        dest: './dist/css/'
    },
    images: {
        all: './src/assets/images/**/*.jpeg',
        dest: './dist/img/'
    },
    dependencies: {
        bootstrap: {
            css: './node_modules/bootstrap/dist/css/bootstrap.min.css',
            js: './node_modules/bootstrap/dist/js/bootstrap.min.js',
        },
        jquery: {
            js: './node_modules/jquery/dist/jquery.slim.min.js'
        },
        popper: {
            js: './node_modules/popper.js/dist/umd/popper.min.js'
        }
    },
    watch : {
        html : './dist/*.html',
        css : './dist/*.css',
        js: './dist/*.js'
    }   
};

gulp.task('clean', function (){
    return del(config.base.dist);
});

gulp.task('pug', function(){
    return gulp.src(
        ['./src/views/event/*.pug', 
        './src/views/edition/*.pug'], 
        { nodir: true }
    )
    .pipe(pug({
        pretty: true,
        data: pugData
    }))
    .pipe(gulp.dest(config.pug.dest))
});

gulp.task('sass', function(){
    return gulp.src([config.sass.all])
    .pipe(sass())
    .pipe(gulp.dest(config.dist.css))
    .pipe(browserSync.stream());
});

gulp.task('css', function(){
    return gulp.src([
        config.dependencies.bootstrap.css
    ])
    .pipe(gulp.dest(config.dist.css))
    .pipe(browserSync.stream());
});

gulp.task('js', function(){
    return gulp.src([
        config.dependencies.bootstrap.js,
        config.dependencies.jquery.js,
        config.dependencies.popper.js
    ])
    .pipe(gulp.dest(config.dist.js))
    .pipe(browserSync.stream());
});

gulp.task('images', function(){
    return gulp.src(config.images.all)
    .pipe(gulp.dest(config.images.dest))
});

gulp.task('all', ['pug', 'sass', 'css', 'js', 'images']);

gulp.task('serve', ['all'], function(){
    browserSync.init({
        server: config.base.dist,
        notify: false
    });
    gulp.watch([config.sass.all], ['sass']);
    gulp.watch([config.pug.all],['pug']);
    gulp.watch(config.watch.html).on('change', browserSync.reload);
    gulp.watch(config.watch.css).on('change', browserSync.reload);
    gulp.watch(config.watch.js).on('change', browserSync.reload);
});

gulp.task('default', ['clean'], function() {
    gulp.start('serve');
});


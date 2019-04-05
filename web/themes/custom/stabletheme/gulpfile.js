const sass = require('gulp-sass');

var styleSRC = 'app/scss/styles.scss'
var styleDIST = './dist/css/'

function css(done){
    gulp.src( styleSRC )
        .pipe( sourcemaps.init())
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest( styleDIST ))
        .pipe( browserSync.stream() )
    done()
};


gulp.task("css", css);

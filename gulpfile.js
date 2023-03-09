const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

function css(done){
    src('src/scss/**/*.scss')//Identificar el archivo Sass
        .pipe( plumber())    
        .pipe( sass())//pipe (Compilar el sass)
        .pipe( dest("build/css"))//Almacena en el disco duro

    done();//callback que avisa cuando al gulp que llega a su final
}

function javascript(done){
    src('src/js/**/*.js')
        .pipe(dest("build/js"))

    done();
}

function dev(done){
    watch('src/scss/**/*.scss', css);   
    watch('src/js/**/*.js', javascript);   
    
    done();
}

exports.css = css;
exports.js = javascript;
exports.dev = dev;
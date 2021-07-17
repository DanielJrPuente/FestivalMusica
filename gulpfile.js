const { series, src, dest, watch, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

// Utilidades

const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

// Utilidades JS

const terser = require('gulp-terser-js');
const rename = require('gulp-rename');


// Funsion que compila sass

function css(){
  return src("./src/scss/app.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest("./build/css"))
    .pipe(notify({message: 'SCSS compilado'}));
}



// funcion de minificar css

function minificarCSS(){
  return src("./src/scss/app.scss")
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest("./build/css"))
    .pipe(notify({message: 'CSS minificado'}));
}

//
function javascript() {
  return src("./src/js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.js'))
    .pipe(terser())
    .pipe(sourcemaps.write("."))
    .pipe(dest("./build/js"))
    .pipe(notify({message: 'Javascript compilado'}));
}

//Minificar imagenes
function imagenes() {
  return src("./src/img/**/*")
    .pipe( imagemin())
    .pipe(dest('./build/img'))
    .pipe(notify({message: 'Imagen minificada'}));
}

// Imagenes webp

function vercionWebp () {
  return src("./src/img/**/*")
    .pipe( webp() )
    .pipe(dest("./build/img"))
    .pipe(notify({message: 'Vercion webp'}));
}



function watchArchivos() {
  watch("./src/scss/**/*.scss", css); // * = a la carpeta actual -- ** = a todos los archivos con esa extencion
  watch("./src/js/**/*.js", javascript);
}

exports.css = css;
exports.minificarCSS = minificarCSS;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;
exports.javascript = javascript;

exports.default = series( css, javascript, imagenes, vercionWebp, watchArchivos);

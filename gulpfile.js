const { series, src, dest, watch, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');


// Funsion que compila sass

function css(){
  return src("./src/scss/app.scss")
    .pipe(sass({
      outputStyle: "expanded"
    }))
    .pipe(dest("./build/css"))
}



// funcion de minificar css

function minificarCSS(){
  return src("./src/scss/app.scss")
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(dest("./build/css"))
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
}

exports.css = css;
exports.minificarCSS = minificarCSS;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = series( css, imagenes, vercionWebp, watchArchivos);

const { series, src, dest, watch} = require('gulp');

const sass = require('gulp-sass')(require('sass'));

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


function watchArchivos() {
  watch("./src/scss/**/*.scss", css); // * = a la carpeta actual -- ** = a todos los archivos con esa extencion
}

exports.css = css;
exports.minificarCSS = minificarCSS;
exports.watchArchivos = watchArchivos;


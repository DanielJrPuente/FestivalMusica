const { series, src, dest, watch} = require('gulp');

const sass = require('gulp-sass')(require('sass'));

// Funsion que compila sass

function css(){
  return src("./src/scss/app.scss")
    .pipe(sass())
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
  watch("./src/scss/app.scss", css);
}

exports.css = css;
exports.minificarCSS = minificarCSS;
exports.watchArchivos = watchArchivos;


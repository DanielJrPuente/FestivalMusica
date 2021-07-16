document.addEventListener("DOMContentLoaded", function(){
  crearGaleria();

})

function crearGaleria(){
  const galeria = document.querySelector('.galeria-imagenes');
  for(let i = 1; i <= 12; i++ ){
    const imagen = document.createElement('IMG');
    imagen.src = `./build/img/thumb/${i}.webp`;
    imagen.dataset.imagenId = i;

    imagen.onclick = mostrarImagen;

    const lista = document.createElement('LI');
    lista.appendChild(imagen);

    galeria.appendChild(lista);
  }
}

function mostrarImagen (e){
  const id = parseInt(e.target.dataset.imagenId);
  const imagen = document.createElement('IMG');
  imagen.src = `./build/img/grande/${id}.webp`;

  const overlay = document.createElement("DIV");
  overlay.appendChild(imagen);
  overlay.classList.add('overley');

  // expandir imagen imagen

  const cerrarImagen = document.createElement("P");
  cerrarImagen.textContent = "X";
  cerrarImagen.classList.add("bt-cerrar");

  overlay.appendChild(cerrarImagen)

  // Cerrar imagen 

  cerrarImagen.onclick = () => {
    overlay.remove()
    body.classList.remove("fijar-body");
  };

  // Cuando se da click en el overlay o la imagen tambien la cerrara

  imagen.onclick = () => {
    overlay.remove()
    body.classList.remove("fijar-body");
  };
  overlay.onclick = () => {
    overlay.remove()
    body.classList.remove("fijar-body");
  };

  // Mostrar en el html

  const body = document.querySelector("body");
  body.appendChild(overlay);
  body.classList.add("fijar-body");

}
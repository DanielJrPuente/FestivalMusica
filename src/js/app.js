document.addEventListener('DOMContentLoaded', function(){
  scrollNav();

  navegacionFija();

  let ancho = screen.width;


})

function navegacionFija(){

  let ancho = screen.width;

  const barra = document.querySelector(".header")

  const tituloHeader = document.querySelector(".contenido-header h1");

  //Registrar el interseccion observer

  const observer = new IntersectionObserver( function(entries){
    if(entries[0].isIntersecting){
      barra.classList.remove("fijo");
      tituloHeader.classList.remove("remove")
    }else {
      barra.classList.add("fijo");
      if(ancho <= 400){
        tituloHeader.classList.add("remove")
      }
    }
  })

  // Elemento que se observara

  observer.observe(document.querySelector(".video"));
}

function scrollNav(){
  const enlaces = document.querySelectorAll('.navegacion-principal a');

  enlaces.forEach( function (enlace){
    enlace.addEventListener('click', function(e){
      e.preventDefault();

      const seccion = document.querySelector(e.target.attributes.href.value);

      seccion.scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
}
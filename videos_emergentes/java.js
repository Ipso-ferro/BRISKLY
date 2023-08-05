// Obtener todos los elementos de video por su clase
var videos = document.getElementsByClassName('vid');

// Recorrer los elementos y agregar el evento de escucha de mouse
for (var i = 0; i < videos.length; i++) {
  videos[i].addEventListener('mouseover', reproducirVideo);
  videos[i].addEventListener('mouseout', pausarVideo);
  videos[i].addEventListener('click', mostrarPantallaEmergente);
}

// Función para reproducir el video
function reproducirVideo(event) {
  event.target.play();
}

// Función para pausar el video
function pausarVideo(event) {
  event.target.pause();
}

// Función para mostrar la pantalla emergente
function mostrarPantallaEmergente(event) {
  // Crear el elemento de la pantalla emergente
  var pantallaEmergente = document.createElement('div');
  pantallaEmergente.className = 'pantalla-emergente';

  // Crear el elemento de video en la pantalla emergente
  var video = document.createElement('video');
  video.className = 'video-emergente';
  video.src = event.target.querySelector('source').src;
  video.controls = true;

  // Agregar el video a la pantalla emergente
  pantallaEmergente.appendChild(video);

  // Agregar la pantalla emergente al cuerpo del documento
  document.body.appendChild(pantallaEmergente);

  // Agregar evento de clic para cerrar la pantalla emergente
  pantallaEmergente.addEventListener('click', cerrarPantallaEmergente);

  // Pausar el video original
  event.target.pause();

  // Aplicar el estilo de desenfoque al header y al main
  var header = document.querySelector('header');
  var main = document.querySelector('main');
  header.style.filter = 'blur(10px)'; /* Valor de desenfoque */
  main.style.filter = 'blur(10px)'; /* Valor de desenfoque */
}

// Función para cerrar la pantalla emergente
function cerrarPantallaEmergente(event) {
  // Remover la pantalla emergente del cuerpo del documento
  document.body.removeChild(event.target);

  // Obtener el video original y reproducirlo
  var videoOriginal = document.getElementsByClassName('vid')[0];
  videoOriginal.play();

  // Restaurar el estilo sin desenfoque al header y al main
  var header = document.querySelector('header');
  var main = document.querySelector('main');
  header.style.filter = 'none';
  main.style.filter = 'none';
}

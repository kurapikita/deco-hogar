const modalImagen = document.querySelector('#modal-imagen');
modalImagen.addEventListener('show.bs.modal', function(event){
    const enlace = event.relatedTarget;
    const rutaImagen = enlace.getAttribute('data-bs-imagen');
    // Construir la imagen
    const imagen = document.createElement('IMG');
    imagen.src = `images/${rutaImagen}.jpg`;
    imagen.classList.add('img-fluid');
    imagen.alt = "Imagen de la galería";

    const contenidoModal = document.querySelector('.modal-body');
    contenidoModal.appendChild(imagen);

});


modalImagen.addEventListener('hidden.bs.modal', function(){
    const contenidoModal = document.querySelector('.modal-body');
    contenidoModal.textContent = "";
});
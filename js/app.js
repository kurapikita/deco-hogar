const modalImagen = document.querySelector('#modal-imagen');
modalImagen.addEventListener('show.bs.modal', function(event){
    const enlace = event.relatedTarget;
    const rutaImagen = enlace.getAttribute('data-bs-imagen');
    console.log(rutaImagen);
})
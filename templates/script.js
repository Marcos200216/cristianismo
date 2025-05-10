// Desplazamiento suave entre secciones
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // Función para abrir el modal
function openForm() {
  document.getElementById("contactModal").style.display = "block";
}

// Función para cerrar el modal
function closeForm() {
  document.getElementById("contactModal").style.display = "none";
}

// Cierra el modal si se hace clic fuera de él
window.onclick = function(event) {
  if (event.target == document.getElementById("contactModal")) {
    closeForm();
  }
}
 
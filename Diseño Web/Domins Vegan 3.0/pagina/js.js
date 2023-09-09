// JavaScript para el slider
const slider = document.querySelector('.slider');
let slideIndex = 0;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slider.children.length;
  showSlide(slideIndex);
}

// Mostrar el primer slide al cargar la página
showSlide(slideIndex);

// Cambiar de slide cada 5 segundos
setInterval(nextSlide, 5000);

// JavaScript para el carrito de compras
const carritoCantidad = document.querySelector('.carrito-cantidad');
let cantidadProductosEnCarrito = 0;

// Función para agregar un producto al carrito
function agregarAlCarrito() {
    cantidadProductosEnCarrito++;
    carritoCantidad.textContent = cantidadProductosEnCarrito;
}

// Escuchar eventos de clic en los botones "Comprar"
const botonesComprar = document.querySelectorAll('.btn-2');
botonesComprar.forEach(boton => {
    boton.addEventListener('click', agregarAlCarrito);
});


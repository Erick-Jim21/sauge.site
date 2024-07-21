let slideIndex = 0;
const totalSlides = document.getElementsByTagName("img").length;

showSlide(slideIndex);

function moveSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.getElementsByTagName("img");
    if (n >= totalSlides) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = totalSlides - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}


 // Obtener elementos del DOM
 const menuBtn = document.querySelector('.menu-btn');
 const navMenu = document.querySelector('.nav-menu');

 // Función para cambiar el estado del menú al hacer clic en el botón
 function toggleMenu() {
     navMenu.classList.toggle('active'); // Agrega o elimina la clase 'active' del menú
 }

 // Event listener para el botón de menú
 menuBtn.addEventListener('click', toggleMenu);
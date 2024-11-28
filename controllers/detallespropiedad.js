// Selección de elementos del DOM
const carousel = document.getElementById('carousel');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const tabsContainer = document.getElementById('carousel-tabs');

// Variables para el carrusel
let currentIndex = 0;
const totalImages = carousel.children.length;

// Crear pestañas dinámicamente
for (let i = 0; i < totalImages; i++) {
    const tab = document.createElement('button');
    tab.dataset.index = i; // Guardar índice como atributo de datos
    if (i === 0) tab.classList.add('active'); // La primera pestaña activa por defecto
    tabsContainer.appendChild(tab);

    // Agregar evento de clic para ir a la imagen correspondiente
    tab.addEventListener('click', () => {
        currentIndex = i; // Actualizar índice
        updateCarousel();
    });
}

// Función para actualizar la posición del carrusel
function updateCarousel() {
    const imageWidth = carousel.children[0].clientWidth;
    carousel.style.transform = `translateX(${-currentIndex * imageWidth}px)`;

    // Actualizar estado de las pestañas
    const tabs = tabsContainer.children;
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.toggle('active', i === currentIndex);
    }
}

// Eventos de los botones de navegación
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

// Ajustar el carrusel al cambiar el tamaño de la ventana
window.addEventListener('resize', updateCarousel);

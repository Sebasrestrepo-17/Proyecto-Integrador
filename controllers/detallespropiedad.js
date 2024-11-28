/* // Selección de elementos del DOM
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
window.addEventListener('resize', updateCarousel); */



/* // Selección de elementos del DOM
const carousel = document.getElementById('carousel');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const tabsContainer = document.getElementById('carousel-tabs');

// Variables para el carrusel
let currentIndex = 0;
const images = Array.from(carousel.children); // Todas las imágenes en un array
const totalImages = images.length;

// Crear pestañas dinámicamente
tabsContainer.innerHTML = ''; // Asegurarse de que el contenedor esté limpio
images.forEach((_, index) => {
    const tab = document.createElement('button');
    tab.classList.add('tab'); // Clase para estilo
    if (index === 0) tab.classList.add('active'); // La primera pestaña activa
    tabsContainer.appendChild(tab);

    // Agregar evento a cada pestaña para cambiar la imagen
    tab.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

// Función para actualizar el carrusel
function updateCarousel() {
    // Mover el carrusel
    const imageWidth = carousel.clientWidth; // Ancho de una imagen visible
    carousel.style.transform = `translateX(${-currentIndex * imageWidth}px)`;

    // Actualizar las pestañas
    Array.from(tabsContainer.children).forEach((tab, index) => {
        tab.classList.toggle('active', index === currentIndex);
    });
}

// Botones de navegación
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

// Ajustar el carrusel al redimensionar la ventana
window.addEventListener('resize', updateCarousel);

// Iniciar carrusel
updateCarousel(); */








document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const tabsContainer = document.getElementById('carousel-tabs');

    const images = Array.from(carousel.children);
    let currentIndex = 0;

    // Crear pestañas
    images.forEach((_, index) => {
        const tab = document.createElement('button');
        tab.classList.add('tab');
        if (index === 0) tab.classList.add('active');
        tabsContainer.appendChild(tab);

        tab.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    function updateCarousel() {
        const imageWidth = carousel.clientWidth;
        carousel.style.transform = `translateX(${-currentIndex * imageWidth}px)`;

        // Actualizar pestañas activas
        Array.from(tabsContainer.children).forEach((tab, index) => {
            tab.classList.toggle('active', index === currentIndex);
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);

    updateCarousel(); // Inicializa el carrusel
});



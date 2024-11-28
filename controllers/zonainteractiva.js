// Control de clic para mostrar/ocultar submenús
document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', function () {
      const target = this.nextElementSibling;
      const allSubMenus = document.querySelectorAll('.submenu');
  
      // Cierra todos los submenús antes de abrir el seleccionado
      allSubMenus.forEach(menu => {
        if (menu !== target) {
          menu.classList.remove('show');
        }
      });
  
      // Alterna la clase 'show' en el submenú
      target.classList.toggle('show');
    });
});

// Redirigir al hacer clic en "Propietarios"
document.getElementById('propietariosLink').addEventListener('click', function() {
  // Redirigir a la página de login
  window.location.href = "../views/login.html";
});
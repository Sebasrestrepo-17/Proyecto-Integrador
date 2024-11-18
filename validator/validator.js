document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const recoverPasswordLink = document.getElementById('recoverPasswordLink');
  const backToLoginLink = document.getElementById('backToLoginLink');
  const recoverContainer = document.getElementById('recover-container');
  const loginContainer = document.querySelector('.login-container');
  const errorMessage = document.getElementById('error-message');

  
  recoverPasswordLink.addEventListener('click', function(e) {
      e.preventDefault();
      loginContainer.style.display = 'none';
      recoverContainer.style.display = 'block';
  });

  backToLoginLink.addEventListener('click', function(e) {
      e.preventDefault();
      loginContainer.style.display = 'block';
      recoverContainer.style.display = 'none';
  });

  
  loginForm.addEventListener('submit', function(e) {
      e.preventDefault(); 

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      
      if (!validateEmail(email)) {
          errorMessage.textContent = 'Por favor, ingresa un correo electrónico válido.';
          return;
      }

      if (password.length < 6) {
          errorMessage.textContent = 'La contraseña debe tener al menos 6 caracteres.';
          return;
      }

      errorMessage.textContent = '';
      console.log('Inicio de sesión exitoso con:', email, password);


      if (email === 'usuario@ejemplo.com' && password === 'contraseña123') {
          window.location.href = 'index.html';  
      } else {
          errorMessage.textContent = 'Correo o contraseña incorrectos.';
      }
  });

  function validateEmail(email) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailPattern.test(email);
  }
});     

















/*--------------------------------------------------------------------------------------------------------------------*/









// Lógica de inicio de sesión al hacer clic en el botón "Ingresar"   Formulario viejo
/* document.getElementById("btnIngresar").addEventListener("click", iniciarSesion);

function iniciarSesion() {
    // Obtener los valores ingresados por el usuario
    let correo = document.getElementById("email").value;
    let contrasena = document.getElementById("password").value;

    // Validar las credenciales (aquí puedes personalizar la validación)
    if (correo === "user@gmail.com" && contrasena === "123456") {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").textContent = "Inicio de sesión exitoso";
        alert('Inicio de sesion exitoso')
        // Redirigir a la página principal
        window.location.href = "index.html";
    } else {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").textContent = "Error de credenciales";
        // Opción de mostrar una alerta
        alert("Correo electrónico o contraseña incorrectos");
    }

    // Imprimir los valores en la consola (opcional para depuración)
    console.log("Correo:", correo);
    console.log("Contraseña:", contrasena);
} */




/* document.getElementById("btnIngresar").addEventListener("click", iniciarSesion);

function iniciarSesion() {
  let correo = document.getElementById("email").value;
  let contrasena = document.getElementById("password").value;
  if( correo === "user@gmail.com" && contrasena === "123456"){
    document.getElementById("message").style.color = "green";
    document.getElementById("message").textContent = "Inicio de sesión exitoso";
    // Redirigir a la página principal
    window.location.href = "index.html";
} else {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").textContent = "Error de credenciales";
    // Opción de mostrar una alerta
    alert('Correo electrónico o contraseña incorrectos');
}

// Imprimir los valores en la consola (opcional para depuración)
console.log("Correo:", correo);
console.log("Contraseña:", contrasena);
} */


//     window.location.href = "index.html";
//   } else {
//     alert('Error de credenciales')
//   }
//   console.log(contrasena, correo);
// }
document.getElementById("btnIngresar").addEventListener("click", iniciarSesion);
function iniciarSesion() {
  let correo = document.getElementById("email").value;
  let contrasena = document.getElementById("password").value;
  if(true){
      window.location.href = "detallespropiedad.html";
  } else {
    alert('Error de credenciales')
  }
  console.log(contrasena, correo);
}
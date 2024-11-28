function guardarInformacion(event) {
    // Evitar que el formulario recargue la página
    event.preventDefault();

    // Obtener los valores ingresados
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const barrio = document.getElementById('lbarrio').value;

    // Construir el mensaje de respuesta
    const mensaje = `
        <h3>Información ingresada:</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Zona de interés:</strong> ${barrio}</p>
        <p><strong> En caso de que haya ingresado un dato mal, vuelva y rellene el formulario, ya que nos comunicaremos al ultimo registro ingresado</strong></p>
    `;

    // Mostrar el mensaje en el div con id "respuesta"
    document.getElementById('respuesta').innerHTML = mensaje;
}
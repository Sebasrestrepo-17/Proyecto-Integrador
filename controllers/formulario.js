function guardarInformacion(event) {
    event.preventDefault(); 

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var barrio = document.getElementById('barrio').value;

    if (nombre && email && telefono && barrio) {
        var datosFormulario = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            barrio: barrio
        };

        localStorage.setItem("datosFormulario", JSON.stringify(datosFormulario));

        document.getElementById("respuesta").innerHTML = "<h2>¡Envío realizado correctamente!</h2>";

        document.getElementById("formulario").reset();
    } else {
        
        document.getElementById("respuesta").innerHTML = "<h2>Error: Todos los campos son obligatorios.</h2>";
    }
}
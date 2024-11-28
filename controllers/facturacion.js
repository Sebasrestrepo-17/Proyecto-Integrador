function mostrarFactura() {
    // Obtener los valores de los campos
    const nombreCliente = document.getElementById('nombreCliente').value;
    const correoCliente = document.getElementById('correoCliente').value;
    const telefonoCliente = document.getElementById('telefonoCliente').value;
    const cedulaCliente = document.getElementById('cedulaCliente').value;
    
    const fechaInicio = document.getElementById('fechaInicio').value;
    const fechaFin = document.getElementById('fechaFin').value;
    const valorPeriodo = parseFloat(document.getElementById('valorPeriodo').value) || 0;
    
    const descripcionDanio = document.getElementById('descripcionDanio').value;
    const costoDanio = parseFloat(document.getElementById('costoDanio').value) || 0;

    // Realizar los cálculos
    const subtotal = valorPeriodo + costoDanio;
    const iva = subtotal * 0.16;
    const totalPagar = subtotal + iva;

    // Mostrar la factura solo si hay datos completos
    if (nombreCliente && correoCliente && telefonoCliente && cedulaCliente && fechaInicio && fechaFin && valorPeriodo > 0 && descripcionDanio && costoDanio > 0) {
        document.getElementById('facturaContainer').style.display = 'block';

        // Mostrar los datos de la factura
        document.getElementById('clienteNombre').textContent = nombreCliente;
        document.getElementById('clienteCorreo').textContent = correoCliente;
        document.getElementById('clienteTelefono').textContent = telefonoCliente;
        document.getElementById('clienteCedula').textContent = cedulaCliente;

        document.getElementById('periodoDesde').textContent = fechaInicio;
        document.getElementById('periodoHasta').textContent = fechaFin;
        document.getElementById('valorPeriodoMostrar').textContent = valorPeriodo.toFixed(2);

        document.getElementById('descripcionDanioMostrar').textContent = descripcionDanio;
        document.getElementById('costoDanioMostrar').textContent = costoDanio.toFixed(2);

        document.getElementById('subtotal').textContent = subtotal.toFixed(2);
        document.getElementById('totalPagar').textContent = totalPagar.toFixed(2);
    } else {
        document.getElementById('facturaContainer').style.display = 'none';
    }
}

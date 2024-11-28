document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obtener los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const monto = document.getElementById('monto').value;
    const cuenta = document.getElementById('cuenta').value;
  
    // Crear una fecha actual para la transferencia
    const fecha = new Date().toLocaleString();
  
    // Mostrar la factura
    document.getElementById('factura-nombre').innerText = nombre;
    document.getElementById('factura-email').innerText = email;
    document.getElementById('factura-monto').innerText = `$${monto}`;
    document.getElementById('factura-cuenta').innerText = cuenta;
    document.getElementById('factura-fecha').innerText = fecha;
  
    // Mostrar la sección de la factura
    document.getElementById('factura').style.display = 'block';
    
    // Limpiar el formulario
    document.getElementById('payment-form').reset();
  });
  
  // Función para descargar la factura como archivo de texto
  document.getElementById('descargar-factura').addEventListener('click', function() {
    const facturaContenido = `
      Factura de Transferencia
      -------------------------
      Nombre: ${document.getElementById('factura-nombre').innerText}
      Correo: ${document.getElementById('factura-email').innerText}
      Monto: ${document.getElementById('factura-monto').innerText}
      Cuenta: ${document.getElementById('factura-cuenta').innerText}
      Fecha: ${document.getElementById('factura-fecha').innerText}
    `;
  
    // Crear un Blob con el contenido de la factura
    const facturaBlob = new Blob([facturaContenido], { type: 'text/plain' });
    
    // Crear una URL para el Blob y descargarlo
    const facturaUrl = URL.createObjectURL(facturaBlob);
    const a = document.createElement('a');
    a.href = facturaUrl;
    a.download = 'factura_transferencia.txt'; // El archivo se llamará "factura_transferencia.txt"
    a.click();
  });
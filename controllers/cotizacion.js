function calcularCotizacion() {
    const valorPropiedad = parseFloat(document.getElementById('valorPropiedad').value);
    const tasaInteres = parseFloat(document.getElementById('tasaInteres').value);
    const plazo = parseInt(document.getElementById('plazo').value);

    if (isNaN(valorPropiedad) || isNaN(tasaInteres) || isNaN(plazo) || valorPropiedad <= 0 || tasaInteres <= 0 || plazo <= 0) {
        alert("Por favor ingrese valores válidos.");
        return;
    }

    const tasaMensual = tasaInteres / 100 / 12;
    const numeroPagos = plazo * 12; 

    const cuotaMensual = valorPropiedad * (tasaMensual * Math.pow(1 + tasaMensual, numeroPagos)) / (Math.pow(1 + tasaMensual, numeroPagos) - 1);

    const totalPagar = cuotaMensual * numeroPagos;

    document.getElementById('totalPagar').innerText = `Total a Pagar: $${totalPagar.toFixed(2)} COP`;
    document.getElementById('cuotaMensual').innerText = `Cuota Mensual: $${cuotaMensual.toFixed(2)} COP`;

    document.getElementById('resultado').style.display = 'block';
}
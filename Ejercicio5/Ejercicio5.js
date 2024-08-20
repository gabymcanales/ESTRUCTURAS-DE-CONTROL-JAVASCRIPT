/*Realizar una función para una tienda de coches en donde se deberá calcular: 
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. 
Si el coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE el descuento será del 20%. 
Mostrar en html el coche seleccionado y el descuento que se aplicara en base a lo que selecciono el usuario. */

function calcularDescuento(coche) {
    let descuento;

    switch (coche.toUpperCase()) {
        case 'FORD FIESTA':
            descuento = 0.05; // 5%
            break;
        case 'FORD FOCUS':
            descuento = 0.10; // 10%
            break;
        case 'FORD ESCAPE':
            descuento = 0.20; // 20%
            break;
        default:
            descuento = 0; // No descuento
            return `El coche seleccionado (${coche}) no tiene descuento disponible.`;
    }

    return `El coche seleccionado es ${coche}. El descuento aplicado es del ${(descuento * 100).toFixed(0)}%.`;
}

function mostrarDescuento() {
    const cocheSeleccionado = document.getElementById('coche').value;
    const resultado = document.getElementById('resultado');
    
    if (cocheSeleccionado) {
        resultado.textContent = calcularDescuento(cocheSeleccionado);
    } else {
        resultado.textContent = 'Por favor, selecciona un coche.';
    }
}
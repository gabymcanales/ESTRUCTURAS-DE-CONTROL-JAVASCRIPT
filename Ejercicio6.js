/*Crear una Función para calcular el descuento en viajes turísticos tomando
en cuenta lo siguiente:  
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
es Puerto el Triunfo el descuento será del 15%.  */

function calcularDescuento(origen, destino) {
    let descuento = 0;

    // Convertimos a minúsculas 
    origen = origen.toLowerCase();
    destino = destino.toLowerCase();

    if (origen === "palma") {
        if (destino === "la costa del sol") {
            descuento = 0.05; 
        } else if (destino === "panchimalco") {
            descuento = 0.10; 
        } else if (destino === "puerto el triunfo") {
            descuento = 0.15; 
        }
    }

    return descuento;
}


let origen = "Palma";
let destino = "Panchimalco";
let descuento = calcularDescuento(origen, destino);

console.log("El descuento es: " + (descuento * 100) + "%");

/*Se realiza la carga de 10 valores enteros por teclado. Se desea conocer: 
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares.
 */

function procesarValores() {
    let valores = [12, -3, 30, 45, -15, 22, 0, 7, -10, 60]; 

    let cantidadNegativos = 0;
    let cantidadPositivos = 0;
    let cantidadMultiplosDe15 = 0;
    let acumuladoPares = 0;

    // Procesar los valores estáticos
    for (let i = 0; i < valores.length; i++) {
        let valor = valores[i];

        if (valor < 0) {
            cantidadNegativos++;
        } else if (valor > 0) {
            cantidadPositivos++;
        }

        if (valor % 15 === 0) {
            cantidadMultiplosDe15++;
        }

        if (valor % 2 === 0) {
            acumuladoPares += valor;
        }
    }

    console.log("Cantidad de valores negativos: " + cantidadNegativos);
    console.log("Cantidad de valores positivos: " + cantidadPositivos);
    console.log("Cantidad de múltiplos de 15: " + cantidadMultiplosDe15);
    console.log("Valor acumulado de números pares: " + acumuladoPares);
}

// Ejecutar la función
procesarValores();

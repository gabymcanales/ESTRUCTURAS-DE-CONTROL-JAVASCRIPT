/*Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
por el usuario.
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarTablaDeMultiplicar(numero) {
    console.log("Tabla de multiplicar del " + numero + ":");

    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}

rl.question('Introduce un número: ', function(numero) {
    numero = parseInt(numero);
    mostrarTablaDeMultiplicar(numero);
    rl.close();
});

/*EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario, 
calcular cual número es el mayor y devolverlo. */


const readline = require('readline');

// Crear una interfaz para leer entradas del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para encontrar el número mayor
function encontrarNumeroMayor(a, b) {
    let mayor;

    // Usar operador ternario para determinar el mayor
    mayor = a > b ? a : (a < b ? b : 'Los números son iguales');

    return mayor;
}

// Solicitar los números al usuario
rl.question('Introduce el primer número entero: ', (respuesta1) => {
    const primerNumero = Number(respuesta1);
    
    rl.question('Introduce el segundo número entero: ', (respuesta2) => {
        const segundoNumero = Number(respuesta2);
        
        // Calcular el número mayor
        const resultado = encontrarNumeroMayor(primerNumero, segundoNumero);
        
        // Mostrar el resultado
        console.log(`El número mayor es: ${resultado}`);
        
        rl.close(); // Cerrar la interfaz readline
    });
});

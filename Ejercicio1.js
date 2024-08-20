/*EJERCICIO 1: Crear una función que en base a la edad que ingreso 
el usuario devolver un mensaje si la persona es mayor de edad o no. 
Utilizar para la condición el operador ternario.*/

function verificarEdad(edad) {
    // Usamos el operador ternario para verificar si es mayor de edad
    let mensaje = edad >= 18 ? "Eres mayor de edad." : "Eres menor de edad.";
    return mensaje;
}

// Pedimos al usuario que introduzca su edad
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Por favor, introduce tu edad: ', (edadUsuario) => {
    // Convertimos la entrada en un número
    edadUsuario = parseInt(edadUsuario);

    // Mostramos el resultado en la consola
    console.log(verificarEdad(edadUsuario));

    readline.close();
});

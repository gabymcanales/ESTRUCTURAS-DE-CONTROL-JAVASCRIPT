/*Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. 
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y aumento. 
Deberá demostrar los datos del empleado y el aumento salarial.*/ 

function calcularAumento(nombre, salario, categoria) {
    let aumentoPorcentaje;

    // Determinamos el porcentaje de aumento basado en la categoría
    switch(categoria.toUpperCase()) {
        case 'A':
            aumentoPorcentaje = 0.15; // 15%
            break;
        case 'B':
            aumentoPorcentaje = 0.30; // 30%
            break;
        case 'C':
            aumentoPorcentaje = 0.10; // 10%
            break;
        case 'D':
            aumentoPorcentaje = 0.20; // 20%
            break;
        default:
            console.log("Categoría no válida");
            return;
    }

    // Calculamos el aumento en el salario
    let aumento = salario * aumentoPorcentaje;
    let nuevoSalario = salario + aumento;

    // Mostramos los datos del empleado y el aumento salarial
    console.log(`
    -------------------------
    Nombre del Empleado: ${nombre}
    Salario Base: $${salario.toFixed(2)}
    Categoría: ${categoria.toUpperCase()}
    Aumento: $${aumento.toFixed(2)} (${(aumentoPorcentaje * 100).toFixed(0)}%)
    -------------------------
    Nuevo Salario: $${nuevoSalario.toFixed(2)}
    -------------------------
    `);
}

// Ejemplo de uso:
let nombre = "Gabriela Canales";
let salario = 1500.00;  // Salario base
let categoria = "B";    // Categoría del empleado

calcularAumento(nombre, salario, categoria);

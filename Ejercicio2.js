/*EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende de lo siguiente:
•Examen =20%
•tareas = 40%
•asistencia = 10%
•investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.*/

function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    // Calculamos la nota final usando los porcentajes dados
    let notaFinal = (examen * 0.20) + (tareas * 0.40) + (asistencia * 0.10) + (investigacion * 0.30);

    // Mostramos los datos del alumno y la nota final
    console.log("Nombre del alumno: " + nombre);
    console.log("Carnet del alumno: " + carnet);
    console.log("Nota final: " + notaFinal.toFixed(2)); // .toFixed(2) para mostrar solo dos decimales
}

// Ejemplo de uso:
let nombre = "Gabriela Canales";
let carnet = "123456789";
let examen = 85;          // Nota del examen
let tareas = 90;          // Nota de las tareas
let asistencia = 100;     // Nota de la asistencia
let investigacion = 80;   // Nota de la investigación

calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion);

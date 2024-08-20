/*Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida”
 */

// Temperatura en Celsius
const tempCelsius = 25; 

// Función para convertir Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Función para clasificar la temperatura en Fahrenheit
function clasificarTemperatura(fahrenheit) {
    if (fahrenheit >= 14 && fahrenheit <= 32) {
        return "Temperatura baja";
    } else if (fahrenheit > 32 && fahrenheit <= 68) {
        return "Temperatura adecuada";
    } else if (fahrenheit > 68 && fahrenheit <= 96) {
        return "Temperatura alta";
    } else {
        return "Temperatura desconocida";
    }
}

// Convertir la temperatura en Celsius a Fahrenheit
const tempFahrenheit = celsiusAFahrenheit(tempCelsius);

// Clasificar la temperatura en Fahrenheit
const clasificacion = clasificarTemperatura(tempFahrenheit);

// Mostrar los resultados
console.log(`Temperatura en Fahrenheit: ${tempFahrenheit.toFixed(2)}`);
console.log(clasificacion);

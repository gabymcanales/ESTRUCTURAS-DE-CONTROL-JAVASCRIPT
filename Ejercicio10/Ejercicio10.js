/*Se cuenta con la siguiente información: 
• Las edades de 5 estudiantes del turno mañana. 
• Las edades de 6 estudiantes del turno tarde.  
• Las edades de 11 estudiantes del turno noche.  
Nota: Las edades de cada estudiante se deberán ingresar por la web. 
Lo que queremos devolver:
• Obtener el promedio de las edades de cada turno (tres promedios).
• Imprimir dichos promedios (promedio de cada turno).
• Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un
promedio de edades mayor.  */

function calcularPromedios() {
    // Obtener todos los campos de entrada para cada turno
    const turnoMananaInputs = document.querySelectorAll('#turnoManana .edad');
    const turnoTardeInputs = document.querySelectorAll('#turnoTarde .edad');
    const turnoNocheInputs = document.querySelectorAll('#turnoNoche .edad');

    // Función para calcular el promedio a partir de los campos de entrada
    function calcularPromedio(inputs) {
        const edades = Array.from(inputs).map(input => parseFloat(input.value)).filter(value => !isNaN(value));
        const suma = edades.reduce((acc, edad) => acc + edad, 0);
        return edades.length > 0 ? suma / edades.length : 0;
    }

    // Calcular los promedios para cada turno
    const promedioManana = calcularPromedio(turnoMananaInputs);
    const promedioTarde = calcularPromedio(turnoTardeInputs);
    const promedioNoche = calcularPromedio(turnoNocheInputs);

    // Armar el mensaje con los resultados
    let mensaje = `Promedio de edades:\n
        Turno Mañana: ${promedioManana.toFixed(2)}\n
        Turno Tarde: ${promedioTarde.toFixed(2)}\n
        Turno Noche: ${promedioNoche.toFixed(2)}`;

    // Determinar cuál turno tiene el promedio mayor
    const promedios = [promedioManana, promedioTarde, promedioNoche];
    const mayor = Math.max(...promedios);
    const turnoMayor = ["Turno Mañana", "Turno Tarde", "Turno Noche"][promedios.indexOf(mayor)];

    // Mostrar los resultados en la página
    document.getElementById("resultado").textContent = `${mensaje}\nEl turno con el promedio de edades mayor es: ${turnoMayor}`;
}

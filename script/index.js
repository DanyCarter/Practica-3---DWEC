/* 
 Autor: Daniel Cadenas Dominguez
 Git Hub: 
 */
window.addEventListener("load", acceso)

function acceso() {

    const nombreCompleto = prompt("Introduzca su nombre completo")
    const diaNacimiento = parseInt(prompt("Introduzca su DIA de nacimiento"))
    const mesNacimiento = parseInt(prompt("Introduzca su MES de nacimiento"))
    const anioNacimiento = parseInt(prompt("Introduzca su AÑO de nacimiento"))

if(nombreCompleto !== "" && !isNaN(diaNacimiento) && !isNaN(mesNacimiento) && !isNaN(anioNacimiento)){

//Titulo
document.write("<h1 style='font-weight: bold;'>PRÁCTICA 3 - DWEC</h1>");
document.write("<hr style='border: 1px solid black;' />");
document.write(`<br>`)

//Buenos dias
    let primerNombre = nombreCompleto.split(" ")
    document.write (`Buenos dias, <strong>${primerNombre[0]}</strong> `)
    document.write(`<br>`)
    document.write(`<br>`)

//Caracteres nombre
    document.write(`Tu nombre completo (nombre y apellidos) tiene <strong>${nombreCompleto.length}</strong> caracteres, incluidos espacios`)
    document.write(`<br>`)
    document.write(`<br>`)

//Primera letra A
let posicion = -1 

for (let i = 0; i < nombreCompleto.length; i++) {
    if (nombreCompleto.charAt(i).toLowerCase() === 'a') {
        posicion = i + 1; 
        break; 
    }
}

if (posicion !== -1) {
    document.write(`La <strong>primera letra 'A'</strong> se encuentra en la posición <strong>${posicion}</strong> del nombre`)
} else {
    document.write("No se encontró la letra 'A' en el nombre.")
}
document.write(`<br>`)
document.write(`<br>`)

//Ultima letra A
let ultimaPosicion = -1

for (let i = nombreCompleto.length - 1; i >= 0; i--) {
    if (nombreCompleto.charAt(i).toLowerCase() === 'a') {
        ultimaPosicion = i + 1;
        break; 
    }
}

if (ultimaPosicion !== -1) {
    document.write(`La <strong>última letra 'A'</strong> se encuentra en la posición <strong>${ultimaPosicion}</strong> del nombre`);
} else {
    document.write("No se encontró la letra 'A' en el nombre.");
}
document.write(`<br>`)
document.write(`<br>`)

//Nombre sin las 3 primeras letras
const nombreSinTresLetras = nombreCompleto.substring(3); 
document.write(`Tu nombre completo <strong>menos las tres primeras letras</strong> es <strong>${nombreSinTresLetras}</strong>`);
document.write(`<br>`)
document.write(`<br>`)

//Nombre en mayusculas
const nombreEnMayusculas = nombreCompleto.toUpperCase(); 
document.write(`Tu nombre completo en <strong>MAYUSCULAS</strong> es <strong>${nombreEnMayusculas}</strong>`);
document.write(`<br>`)
document.write(`<br>`)

//Tu edad es
const fechaActual = new Date();
const diaActual = fechaActual.getDate();
const mesActual = fechaActual.getMonth() + 1; 
const anioActual = fechaActual.getFullYear();

let edad = anioActual - anioNacimiento;

if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
    edad--;
}

document.write(`Tu <strong>edad</strong> es <strong>${edad}</strong> años`);
document.write(`<br>`)
document.write(`<br>`)

//Estacion nacimiento

let estacion = '';

if (mesNacimiento >= 1 && mesNacimiento <= 12) {
    if (mesNacimiento >= 3 && mesNacimiento <= 5) {
        estacion = 'Primavera';
    } else if (mesNacimiento >= 6 && mesNacimiento <= 8) {
        estacion = 'Verano';
    } else if (mesNacimiento >= 9 && mesNacimiento <= 11) {
        estacion = 'Otoño';
    } else {
        estacion = 'Invierno';
    }

    document.write(`Naciste un feliz dia de <strong>${estacion}</strong> del año <strong>${anioNacimiento}</strong>`);
} else {
    document.write('El mes de nacimiento ingresado no es válido.');
}
document.write(`<br>`)
document.write(`<br>`)

//Coseno de 180
const coseno180 = Math.cos(180 * Math.PI / 180);
document.write(`El <strong>coseno de 180</strong> es <strong>${coseno180}</strong>`);
document.write(`<br>`)
document.write(`<br>`)

//El numero mayor
    const numeros = [34, 67, 23, 75, 35, 19];
    const mayorNumero = encontrarMayorNumero(numeros);
    document.write(`El número mayor de <strong>(34, 67, 23, 75, 35, 19)</strong> es ${mayorNumero}`);
    document.write(`<br>`)
    document.write(`<br>`)

//Numero al azar entre 0 y 100
    const numeroAzar = generarNumeroAzar();
    document.write(`El número aleatorio entre 0 y 100 es: <strong>${numeroAzar}</strong>`);
    document.write(`<br>`)
    document.write(`<br>`)

//Reinicio
const botonReinicio = document.createElement('button');
botonReinicio.textContent = 'Reiniciar';
botonReinicio.addEventListener('click', function() {
location.reload();
})
document.body.appendChild(botonReinicio);

//Nueva ventana
let ventanaSecundaria;

function abrirNuevaVentana() {
    
    ventanaSecundaria = window.open('', '_blank', 'width=800, height=600, resizable=no');

    ventanaSecundaria.document.write(`
        <html>
        <head>
            <title>Ejemplo de Ventana Nueva</title>
        </head>
        <body>
            <h1>Ejemplo de Ventana Nueva</h1>
            <p>URL completa: ${window.location.href}</p>
            <p>Protocolo utilizado: ${window.location.protocol}</p>
            <iframe src="https://hotellallastra.app/inicio" width="800" height="600" id="miIframe"></iframe>
            <br>
            <button onclick="cerrarVentana()">Cerrar Ventana</button>
            <script>
                function cerrarVentana() {
                    window.close();
                }
            </script>
        </body>
        </html>
    `);
}

const botonAbrirVentana = document.createElement('button');
botonAbrirVentana.textContent = 'Abrir Ventana';
botonAbrirVentana.addEventListener('click', abrirNuevaVentana);


document.body.appendChild(botonAbrirVentana);

}else{
  alert("No pueden quedar campos vacios, intentelo de nuevo.")
  location.reload();
}}



function encontrarMayorNumero(numeros) {
    let mayor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }

    return mayor;
}

function generarNumeroAzar() {
    return Math.floor(Math.random() * 101); 
}
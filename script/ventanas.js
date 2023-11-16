// ventanas.js

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

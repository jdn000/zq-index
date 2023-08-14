document.addEventListener('DOMContentLoaded', function() {
    const electronButton = document.querySelectorAll('.electron-button');
    const webButtons = document.querySelectorAll('.web-button');

    // Verificar si estás en un entorno de Electron y mostrar/ocultar botones
    if (isElectron()) {
        electronButton.style.display = 'block';
        webButtons.forEach(button => {
            button.style.display = 'none';
        });
    } else {
        electronButton.style.display = 'none';
        webButtons.forEach(button => {
            button.style.display = 'block';
        });
    }

    document.getElementById('goToMain').onclick = function () {
        goToMain();
    };
    document.getElementById('printPdf').onclick = function () {
        printPdf();
    };
});

// Función para verificar si estás en un entorno de Electron
function isElectron() {
    return navigator.userAgent === 'electron-webview' || navigator.userAgent.includes('Electron');
}

function goToMain() {
    if (isElectron()) {
        window.api.send('goToMainScreen');
    } else {
        console.log('Not on the right environment');
    }
}

function printPdf() {
    if (isElectron()) {
        window.api.send('printPdf', 'sample.pdf');
    } else {
        console.log('Not on the right environment');
    }
}
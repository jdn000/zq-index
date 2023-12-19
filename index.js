document.addEventListener("DOMContentLoaded", function() {
    const electronButtons = document.querySelectorAll(".electron-button");
    const webButtons = document.querySelectorAll(".web-button");

    // Verificar si estás en un entorno de Electron y mostrar/ocultar botones
 if (isElectron()) {
        electronButtons.forEach(button => {
            button.style.display = "block";
        });
        webButtons.forEach(button => {
            button.style.display = "none";
        });
    } else {
         electronButtons.forEach(button => {
            button.style.display = "none";
         });
        webButtons.forEach(button => {
            button.style.display = "block";
        });
     }


    document.getElementById("printPdf").onclick = function () {
        printPdf();
    };
    
    document.getElementById("webButton1").onclick = function () {
        goToMain();
    };
    document.getElementById("webButton2").onclick = function () {
        alert("La aplicacion no se esta ejecutando en un contexto adecuado");
        printPdf();
    };
    document.getElementById("printThermalCustom").onclick = function () {
        printPdf();
    };
    document.getElementById("printThermalTicket").onclick = function () {
        printPdf();
    };
    document.getElementById("printLaserCustom").onclick = function () {
        printPdf();
    };
    document.getElementById("printLaserPdf").onclick = function () {
        printPdf();
    };
});

// Función para verificar si estás en un entorno de Electron
function isElectron() {
 return navigator.userAgent === "electron-webview" || navigator.userAgent.includes("Electron");
}

function goToMain() {
    if (isElectron()) {
        window.api.send("goToMainScreen");
    } else {
        console.log("Not on the right environment");
    }
}

function downloadFile(url, filename) {
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}

// function printPdf() {
//     if (isElectron()) {
//         window.api.send("printPdf", {type:"printPdf","https://github.com/jdn000/zq-index/raw/main/sample.pdf"});
//     } else {
//         console.log("Not on the right environment");
//         const githubPagesUrl = "https://www.africau.edu/images/default/sample.pdf"; // Cambia esto a la URL de tu PDF en GitHub Pages
//         const filename = "sample.pdf";
//         downloadFile(githubPagesUrl, filename);
//     }
// }
function printThermalCustom() {
    if (isElectron()) {
        window.api.send("printCustomThermal", {type:"thermal",data:"https://github.com/jdn000/zq-index/raw/main/sample.pdf"});
        console.log("printThermalCustom")
    } else {
        console.log("Not on the right environment");
    
    }
}
function printThermalTicket() {
    if (isElectron()) {
        console.log("printThermalTicket")

        window.api.send("printTicket", {type:"thermal",data:"https://github.com/jdn000/zq-index/raw/main/sample.pdf"});
    } else {
        console.log("Not on the right environment");
    
    }
}
function printLaserCustom() {
    
    if (isElectron()) {
        console.log("printLaserCustom")

        window.api.send("printCustomLaser", {type:"laser",data:"https://github.com/jdn000/zq-index/raw/main/sample.pdf"});
    } else {
        console.log("Not on the right environment");
    
    }
}
function printLaserPdf() {
    if (isElectron()) {
        console.log("printLaserPdf")

        window.api.send("printPdf", {type:"laser",data:"https://github.com/jdn000/zq-index/raw/main/sample.pdf"});
    } else {
        console.log("Not on the right environment");
    
    }
}
document.getElementById('goToMain').onclick = function () {
    goToMain()
};
document.getElementById('printPdf').onclick = function () {
    printPdf()
};

function goToMain() {
    if (navigator.userAgent === 'electron-webview' || navigator.userAgent.includes('Electron')) {

        window.api.send("goToMainScreen");
    } else {
        console.log('Not on right environment')
    }
}

function printPdf() {
    if (navigator.userAgent === 'electron-webview' || navigator.userAgent.includes('Electron')) {

        window.api.send("printPdf","sample.pdf");
    } else {
        console.log('Not on right environment')
    }
}
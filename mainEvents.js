let { app, BrowserWindow } = require("electron");
const electron = require('electron')

let { PythonShell } = require("python-shell");

let pybits = new PythonShell("pythonBits.py");


PythonShell.run('my_script.py', null, function (err) {
    if (err) throw err;
    console.log('finished');
});


function bindEvents() {
    pybits.on("message", (stuff) => {
        console.log(stuff);
    });

    let inputField = document.getElementById("input");

    inputField.addEventListener("submit", (ev) => {
        pybits.send(inputField.value);
    });


    let sendBt = document.getElementById('sendBt')
    sendBt.addEventListener('click', (ev) => {
        pybits.send(inputField.value);
    })


}



bindEvents()
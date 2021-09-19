
const { spawn, execFile } = require('child_process');


const fetch = require('node-fetch')




child = execFile('./py/timer.exe')



async function fetchData() {
    const res = await fetch("http://localhost:8080/");
    const data = await res.text();
    console.log(data);
    return res;
}

child.on('spawn', () => {
    fetchData();
})
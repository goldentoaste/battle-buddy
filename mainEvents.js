
const { spawn, execFile } = require('child_process');


const fetch = require('node-fetch')




child = spawn('./py/parse.exe')


// child.stdout.on('data', (data) => {
//     console.log(data.toString())
// })
async function fetchData() {
    console.log('starting')
    const res = await fetch("http://localhost:8080/",);
    console.log('ending')
    const data = await res.text();
    console.log(data);
    return res;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


child.on('spawn', async () => {
    console.log('before sleep')
    await sleep(2000)
    console.log('after sleep')
    fetchData();
})

child.on('SIGINT', () => { child.exit() })
child.on('SIGTERM', () => { child.exit() })
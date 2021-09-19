
const { spawn, execFile } = require('child_process');


const fetch = require('node-fetch')




child = spawn('./py/parse.exe')


// child.stdout.on('data', (data) => {
//     console.log(data.toString())
// })
async function fetchData() {
   
    const res = await fetch("http://localhost:8080/",);

    const data = await res.text();

    return res;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


child.on('spawn', async () => {

    await sleep(2000)

    fetchData();
})


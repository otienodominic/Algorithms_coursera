// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
    rl.on('line', readLine);
});

function readLine (line) {
    const arr = line.toString().split(' ').map(Number);

    console.log(max(arr));
    process.exit();
}

function max(arr) {
    // write your code here
    let new_arr = arr.sort((a,b)=> b-a)
    return new_arr[0]*new_arr[1]
}

module.exports = max;

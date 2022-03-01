// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fib(parseInt(line, 10)));
    process.exit();
}

function fib(n) {
    // write your code here
    let next
    let prev = 0;
    let curr = 1;
    if(n<2) return n
    for(let i=2; i<=n; i++){
       next =  prev + curr
       prev =  curr
       curr = next
    }
    return curr
}

module.exports = fib;



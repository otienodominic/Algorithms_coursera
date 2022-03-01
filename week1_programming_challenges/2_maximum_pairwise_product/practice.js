function pisano(m)
{
    let prev = 0;
    let curr = 1;
    let res = 0;
 
    for(let i = 0; i < m * m; i++)
    {
        let temp = 0;
        temp = curr;
        curr = (prev + curr) % m;
        prev = temp;
 
        if (prev == 0 && curr == 1)
            res = i + 1;
    }
    return console.log(res);
}
function fibonacciModulo(n,m)
{
     
    // Getting the period
    let pisanoPeriod = pisano(m);
 
    n = n % pisanoPeriod;
 
    let prev = 0;
    let curr = 1;
 
    if (n == 0)
        return 0;
    else if (n == 1)
        return 1;
 
    for(let i = 0; i < n - 1; i++)
    {
        let temp = 0;
        temp = curr;
        curr = (prev + curr) % m;
        prev = temp;
    }
    return console.log(curr % m);
}
// fibonacciModulo(2816213588, 239)
pisano(235)


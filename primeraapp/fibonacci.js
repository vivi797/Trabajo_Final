let fibonacci = (a) =>{
    let fibo = 0;
    let aux = 1;
    let ant = 0;

    // 0 1 1 2 3
    for(let i=0; i<(a-1); i++){
        ant = fibo;
        fibo = aux;
        aux = ant + fibo;
    }
    return fibo
}

module.exports =fibonacci
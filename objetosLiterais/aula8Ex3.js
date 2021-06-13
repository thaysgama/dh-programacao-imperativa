function maiorNumero(...parametros){
    return Math.max(...parametros);
}

console.log(maiorNumero(5,9,6,10,1))


let menorNumero = (...parametros) => Math.min(...parametros);

console.log(menorNumero(5,10,99,3,40))
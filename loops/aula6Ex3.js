//tabuada de um numero só
function tabuada (numero){ 
    for (let i = 1; i <= 9; i++) {
        console.log(numero+' * '+i+' = '+(numero*i));
    } 
}
tabuada(2);

console.log('---------------------------------')


function tabuadaCompleta (){ 
    for (let i = 1; i <= 9; i++) {
        for(let j = 1; j<=9; j++){
            let resultado = j*i
        console.log(i+' * '+j+' = '+resultado)
        }   
    }
}
tabuadaCompleta();
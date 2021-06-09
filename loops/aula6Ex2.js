//guardando o conjunto num vetor e imprimindo numa linha só
let pares=[];
let impares=[];
for(let i=1;i<=10;i++){
    if(i%2===0){
        pares.push(i);
    } else{
        impares.push(i);
    }
}
console.log('Os números pares: '+ pares);
console.log('Os números impares: '+ impares);

console.log();

//imprimindo cada numero em linhas separadas
for(let i=1;i<=10;i++){
    if(i%2!==0){
       console.log('numero ímpar = '+i)
    }
}

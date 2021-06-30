// Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.

let pares =[2,4,6,8,9,10];

let impares1 = pares.map(num => num+1);
let impares2 = pares.map(function (num) {return num+1});

console.log(impares1+'\n'+impares2);

// Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

let nomes = ['Maria', 'Jesus', 'José', 'Maria Madalena', 'Judas'];

let maria = nomes.filter(nome => nome.includes('Maria'));
console.log(maria);

// Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.

let numeros = [1,2,3,4,5];

let soma = numeros.reduce((acumulador, numero)=>acumulador+numero);
let multiplicacao = numeros.reduce((acumulador, numero)=>acumulador*numero);
let numerosformatados = numeros.reduce((acumulador, numero)=>`${acumulador} - ${numero}`);

console.log('Teste soma: '+soma+' - Teste multiplicação: '+multiplicacao);
console.log(numerosformatados);

// Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.

let animais = ['cabra', 'zebra', 'elefante', 'girafa', 'rato'];

animais.forEach(animal=>console.log('O animal é '+animal));
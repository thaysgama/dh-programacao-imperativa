//cria array
let array = ['pão', 'leite', 'ovos', 'queijo'];
console.log("Array inicial = "+array);

//insere item ou itens no final do array
array.push('café','presunto');
console.log("Dois itens incluidos com .push = "+array);

// exclui ultimo elemento do array e este pode ser adicionado a uma variável se necessário
let excluidoUltimo = array.pop();
console.log("Ultimo item excluido com .pop() = "+array);
console.log("Item excluido = "+ excluidoUltimo);

// exclui primeiro elemento do array e este pode ser adicionado a uma variável se necessário
let excluidoPrimeiro = array.shift();
console.log("Primeiro item excluido com .shift() = "+array);
console.log("Item excluido = "+ excluidoPrimeiro);

//adiciona um ou mais itens no começo da lista
array.unshift('iogurte', 'arroz');
console.log("Dois itens incluidos ao início da lista com .unshift() = "+array);

//Trasnforma array em string e seleciona um separador de elementos
console.log("Array transformado em string com .join()= "+array.join(' '))
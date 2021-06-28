let readlineSync = require('readline-sync');
let microondas = require('./microondas');
let opcao;
while(opcao !=='6') {
    opcao = readlineSync.question('\nSelecione a opcao desejada:\n1 - Pipoca - 10 segundos (padrao)\n2 - Macarrao - 8 segundos (padrao)\n3 - Carne - 15 segundos (padrao)\n4 - Feijao - 12 segundos (padrao)\n5 - Brigadeiro - 8 segundos (padrao)\n6 - SAIR\n');
    if (opcao !=='6'){
        tempo = readlineSync.question('Selecione o tempo desejado: ');
        console.log(microondas(parseInt(opcao),parseInt(tempo)));
    } else {
        console.log('Tenha um bom dia!')
        break;}
}
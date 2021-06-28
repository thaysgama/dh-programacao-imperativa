let verificacao = (padrao, tempo) =>{
    // se o tempo não for definido, é direcionado para o padrão.
    if (isNaN(tempo)) { 
        tempo = padrao; 
        console.log('Selecionamos o tempo padrão.')}
    if (tempo < padrao){
        return 'Tempo insuficiente';
    }
    else if(tempo >=padrao && tempo <=(2*padrao)){
        return 'Prato pronto, bom apetite!!!'
    }
    else if (tempo > (2*padrao) && tempo <= (3*padrao)){
        return 'A comida queimou';
    } 
    else if (tempo>(3*padrao)){
        return 'Kabumm'
    }
}

let microondas = (prato, tempo) =>{
    switch(prato){
        //opção pipoca
        case 1:
            return verificacao(10, tempo);
        //opção macarrão, brigadeiro
            case 2: case 5:
            return verificacao(8, tempo);
        //opção carne
            case 3:
            return verificacao(15,tempo);
        //opção feijão
            case 4:
            return verificacao(12, tempo);
        default:
            return 'Prato inexistente.'
    }
}

module.exports = microondas;
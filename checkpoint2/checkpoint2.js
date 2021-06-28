let verificacao = (padrao, tempo) =>{
    // se o tempo não for definido ou não for um valor reconhecido, é direcionado para o padrão.
    if (isNaN(tempo) || tempo ===null || tempo ==='') { 
        tempo = padrao; 
        console.log('Valor não reconhecido. Tempo padrão selecionado.');
    }
    if (tempo < padrao){
        return 'Tempo insuficiente';
    }
    else if(tempo >=padrao && tempo <=(2*padrao)){
        return 'Prato pronto, bom apetite!!!'
    }
    else if (tempo > (2*padrao) && tempo <= (3*padrao)){
        return 'A comida queimou';
    } 
    else if (tempo >(3*padrao)){
        return 'Kabumm'
    }
}

let microondas = (prato, tempo) =>{
    console.log(`Prato escolhido: ${prato}`);
    switch(prato.toLowerCase()){
        case 'pipoca':
            return verificacao(10, tempo);
        case 'macarrão': case 'brigadeiro':
            return verificacao(8, tempo);
        case 'carne':
            return verificacao(15,tempo);
        case 'feijão':
            return verificacao(12, tempo);
        default:
            return 'Prato inexistente.'
    }
}

// console.log(microondas('brigadeiro'));
// console.log(microondas('macarrão', 'dald'));
// console.log(microondas('feijão', null));
// console.log(microondas('carne', '4'));
console.log(microondas('brigadeiro', 10));
// console.log(microondas('macarrão', 50));
// console.log(microondas('carne', 46));
// console.log(microondas('feijão', 31));
// console.log(microondas('feijao', 31));
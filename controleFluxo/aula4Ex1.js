let linguagem = 'javascript';

//opção com if
if(linguagem == 'javascript' || linguagem=='JAVASCRIPT'){
    console.log('Estou aprendendo');
} else{
    console.log('Aprenderei mais tarde')
}

//opção com switch
switch (linguagem){
case 'javascript':
case 'JAVASCRIPT':
    console.log('Estou aprendendo');
    break;
default:
    console.log('Aprenderei mais tarde');
}
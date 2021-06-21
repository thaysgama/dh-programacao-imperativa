function operacao(a,b, operacao){
    switch (operacao){
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '/':
            return a/b;
        case '*':
            return a*b;
        default:
            return 'Operação não reconhecida'
    }
}
module.exports = operacao;
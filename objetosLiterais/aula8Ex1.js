//criando função construtora
function Restaurante(nome,cardapio){
    this.nome = nome;
    this.cardapio = cardapio;
    this.entrada = function() {
        return 'Seja bem-vindo(a) '+ this.nome +',\nCardápio a seguir cadastrado com sucesso:\n'+this.cardapio.join('\n')}
}

let restaurante1 = new Restaurante('Marmitaria da esquina', ['1 - Quentinha c/ 1 opção', '2 - Quentinha c/ 2 opções', '3 - Quentinha c/ 3 opções'])

console.log(restaurante1.entrada());
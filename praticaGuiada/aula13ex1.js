let AlunoImport = require('./aluno');
let CursoImport = require('./curso');
const {Estudante, estudantes} = require('./estudantes');

let joao = new AlunoImport('João', 5, [7,8,9]); 
let maria = new AlunoImport('Maria', 2, [8.1,9,6]);
let leticia = new AlunoImport('Leticia', 1, [10,9,10]);
let marcelo = new AlunoImport('Marcelo', 3, [9,10,7]);


console.log("A média do(a)"+ joao.nome +' = '+ joao.media());
console.log("A quantidade de faltas atual do "+joao.nome+" = "+joao.qtfaltas);
console.log(joao.falta());
console.log();

let programacaoImp = new CursoImport('programação imperativa',7,2,[joao, maria, leticia,marcelo]);
let bancoDados = new CursoImport('banco de dados',7,2,estudantes);

programacaoImp.addAluno(new AlunoImport('Monica', 2, [10,6,5]));

// console.log(programacaoImp.aprovacao(programacaoImp.listaAlunos[1]));

console.log(programacaoImp.aprovacaoTodos());
console.log(bancoDados.aprovacaoTodos());
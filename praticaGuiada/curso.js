// Instruções:
// Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
// Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não.
// Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo que contém o objeto curso. Substitua o conteúdo da propriedade lista de estudantes, pela lista de estudantes do arquivo estudantes.js e garanta que sigam funcionando todos os métodos corretamente. (revisar que o arquivo tenha todos os métodos corretamente).


class Curso{
    constructor(nome, notaAprov, faltasMax, listaAlunos){
        this.nome = nome,
        this.notaAprov = notaAprov,
        this.faltasMax = faltasMax,
        this.listaAlunos = listaAlunos,
        this.addAluno = function (aluno){
            this.listaAlunos.push(aluno);
        },
        this.aprovacao = function(aluno){
            console.log(`Média: ${aluno.media()} Faltas: ${aluno.qtfaltas}`)
            if(aluno.media()>=this.notaAprov && aluno.qtfaltas < this.faltasMax){
                return true
            } else if (aluno.media()>(this.notaAprov)*1.1 && aluno.qtfaltas == this.faltasMax) {
                return true;
            } else return false;
        }
        this.aprovacaoTodos = function(){
            let array = [];
            this.listaAlunos.forEach(aluno => {
                let aprov = this.aprovacao(aluno);
                array.push(aprov);
                if (aprov === true){
                    console.log(`Aluno(a) ${aluno.nome} aprovado.\n`)
                } else {
                    console.log(`Aluno(a) ${aluno.nome} reprovado.\n`)
                }
            });
            return array;
        }
    }
}

module.exports = Curso;
class Estudante{
    constructor(nome, qtfaltas, notas){
        this.nome = nome,
        this.qtfaltas =qtfaltas,
        this.notas =notas;
        this.media = function () {
            return (this.notas.reduce((a,b)=> a+b) /this.notas.length).toFixed(2)};
        this.falta = function(){
            this.qtfaltas ++;
            return "Falta do(a) aluno(a) "+this.nome+ " contabilizada.\nNumero de faltas = "+ this.qtfaltas;
        }
    }
}

let estudantes = [
    new Estudante("Agus Pasqualis", 5, [10,10,8,10,4]),
    new Estudante("Angel Vargas", 3, [4,10,5,8,10]),
    new Estudante("Ana Belen", 2, [8,9,4,10,10]),
    new Estudante("Carlos Naranjo", 1, [9,5,6,5,10]),
    new Estudante("Catalina Forgione", 7, [2,8,5,8,8])
]

module.exports = {Estudante, estudantes};
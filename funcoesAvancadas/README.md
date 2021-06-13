## Exercício “Transformando funções”

**Objetivo**

Entender e aplicar transformações de funções comuns para arrow functions

**Micro desafios**

Transforme as seguintes funções em arrow functions:

```javascript
function print(mensagem){
  console.log(mensagem)
}

print("Olá, bom dia")


function soma(n1, n2){
  return n1 + n2
}

console.log(soma(10, 10))
```



## Exercício “Terceirizando funções”

**Objetivo**

Compreender a utilização das callbacks e suas aplicações.

**Micro desafios**

Crie uma função **acaoCarro()**, que receberá uma callback como parâmetro. Após isso, crie duas funções: **andar()** – deve **exibir** uma **mensagem** dizendo que **o carro está andando** – e **parar()** – deve **exibir** uma **mensagem** dizendo que **o carro parou**.
**Execute** ambas **as ações utilizando** a função **acaoCarro()**, passando suas ações como callbacks.
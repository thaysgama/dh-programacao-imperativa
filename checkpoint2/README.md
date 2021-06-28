## 2 ͦ Checkpoint de programação imperativa

Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

\- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

​      1 - Pipoca – 10 segundos (padrão);
​      2 - Macarrão – 8 segundos (padrão);
​      3 - Carne – 15 segundos (padrão);
​      4 - Feijão – 12 segundos (padrão);
​      5 - Brigadeiro – 8 segundos (padrão); 

\- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
\- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
\- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
\- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
\- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".



## Solução

Foram criadas duas funções:

- Function verificacao compara o padrão de tempo de cada comida com o tempo escolhido e retorna as strings pedidas;
- Function microondas recebe o tipo do prato e o tempo escolhido. A partir desses valores, esta chamará a funtion verificacao com o padrão de tempo adequado ao alimento.

Além da solução principal no arquivo **'checkpoint2.js'**, foi criada uma segunda solução na pasta **checkpoint2-readline**, com a importação do modulo npm **'readline-sync'** transformando as opções em um menu dinâmico e inclusão da entrada do usuário.


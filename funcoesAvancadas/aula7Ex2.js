let acaoCarro = callback => console.log(callback());

let andar = () => 'o carro está andando';

let parar = () => 'o carro parou'; 

acaoCarro(andar);
acaoCarro(parar);
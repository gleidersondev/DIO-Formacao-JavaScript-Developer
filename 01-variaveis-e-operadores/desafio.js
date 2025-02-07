// Faça um programa para calcular o valor de uma viagem.

// Você terá 3 variáveis. Sendo elas:
//  1 - Preço do combustível;
//  2 - Gasto médio de combustível do carro por KM;
//  3 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

let precoCombustivel = 6.39;

let kmPorLitro = 13;

let distanciaEmKm = 260;


const calculaValorDeViagem = () => (precoCombustivel / kmPorLitro) * distanciaEmKm;

const resultado = calculaValorDeViagem();

console.log(resultado.toFixed(2));

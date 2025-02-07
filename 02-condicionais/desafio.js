// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
//  1 - Preço do etanol;
//  2 - Preço do gasolina;
//  3 - O tipo de combustível que está no seu carro;
//  4 - Gasto médio de combustível do carro por KM;
//  5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

let precoCombustivel = 6.39;

let kmPorLitro = 13;

let distanciaEmKm = 260;

let precoDoEtanol = 4.13;

let precoDaGasolina = 6.09;

let tipoCombustivel = "Diesel";

if (tipoCombustivel === "Gasolina") {
    const valorGasto = (precoDaGasolina / kmPorLitro) * distanciaEmKm;
    console.log(`O valor gasto em Gasolina para realizar a viagem é de R$ ${valorGasto.toFixed(2)}`);
} else if (tipoCombustivel === "Etanol") {
    const valorGasto = (precoDoEtanol / kmPorLitro) * distanciaEmKm;
    console.log(`O valor gasto em Etanol para realizar a viagem é de R$ ${valorGasto.toFixed(2)}`);
} else  {
    console.log(`O preço de ${tipoCombustivel} precisa ser criado e preenchido`);    
};
// 1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da 
// faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

// Média = (nota 1 + nota 2 + nota 3) / 3;

// Classificação:
// - Média menor que 5, reprovação;
// - Média entre 5 e 7, recuperação;
// - Média acima de 7, passou de semestre;

const portugues = 5;
const matematica = 5;
const fisica = 25;

const mediaClassificaçao = (nota1, nota2, nota3) => {
  let media = (nota1 + nota2 + nota3) / 3;

  if (media < 5) {
    console.log(`Sua média foi ${media} e sua classificação é REPROVAÇÃO`);
  } else if (media >= 5 && media <= 7) {
    console.log(`Sua média foi ${media} e sua classificação é RECUPERAÇÃO`);
  } else {
    console.log(`Sua média foi ${media.toFixed(2)} e sua classificação é PASSOU DE SEMESTRE`);
  }
};


mediaClassificaçao(portugues, matematica, fisica);

// 2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde 
// para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

// Formula do IMC:
// IMC = peso / (altura * altura)

// Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição
//  de acordo com a tabela abaixo.

// IMC em adultos Condição:
// - Abaixo de 18.5 Abaixo do peso;
// - Entre 18.5 e 25 Peso normal;
// - Entre 25 e 30 Acima do peso;
// - Entre 30 e 40 Obeso;
// - Acima de 40 Obsesidade Grave;

const peso = 73
const altura = 1.72;

const condicao = (kg, al) => {
  const resultado = kg / (al * al);

  if (resultado < 18.5) {
    console.log('Sua condição é ABAIXO DO PESO');
  } else if (resultado > 18.5 && resultado < 25) {
    console.log('Sua condição é PESO NORMAL');
  } else if (resultado > 25 && resultado < 30) {
    console.log('Sua condição é ACIMA DO PESO');
  } else if (resultado > 30 && resultado < 40) {
    console.log('Sua condição é OBESO');
  } else {
    console.log('Sua condição é OBESIDADE GRAVE');    
  }
};

condicao(peso, altura);



// 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código Condição de pagamento:
// - À vista Débito, recebe 10% de desconto;
// - À vista no Dinheiro ou PIX, recebe 15% de desconto;
// - Em duas vezes, preço normal de etiqueta sem juros;
// - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
// Função imediatamente invocada

(function teste2() {
  let resultado = 10 + 10;
  console.log(resultado);
  
})();

// Invocando função dentro de outra função

const saudacao = (nome) => nome;

const nome = 'Gleiderson';

const boasVindas = () => console.log(`Olá, ${saudacao(nome)}! Seja bem-vindo(a)`);

boasVindas();

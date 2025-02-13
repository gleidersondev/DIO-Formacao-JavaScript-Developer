const pessoa = {
  nome: 'Gleiderson David',
  idade: 40,
  descrever: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);    
  }
};

// Objeto é um estrutura dinâmica de chave e valor
// uma função dentro de um objeto é chamado de método
// o 'this' diz respeito a todo contexto que a função está inserida ou
// que referencia as propriedades do próprio objeto.
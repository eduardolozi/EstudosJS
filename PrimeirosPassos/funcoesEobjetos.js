let nome = "Eduardo Lozano";
let idade = 21;
  
//Como os atributos do objeto humano tem o mesmo nome que as variáveis acima, podemos colocar dessa maneira sem precisar falar nome: nome por exemplo
let humano = {
  nome,
  idade,
  apresentar() {
    console.log(`Oi meu nome é ${nome}, e tenho ${idade} anos.`);
  }
}

// Os parâmetros REST são formas de fazer que uma função possa receber um número dinâmico de valores, entao, a funcao pode aceitar apenas "a" e "b". Ou entao, pelo "...c" ele pode aceitar múltiplos valores
function somar(a, b, ...c) {
  let res = a + b;
  
  // O foreach é um método que os arrays possuem para que todos os elementos façam a mesma funcao
  c.forEach(function (n) {
    res += n;
  })
}
console.log(somar(1, 2, 3, 4, 5, 6, 7));

//O Operator Spread serve para que a gente possa juntar dois arrays de forma facil da seguinte maneira
let arr1 = [1, 2, 3, 4, 5], arr2 = [6, 7, 8, 9, 0];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

function aluno(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  console.log(`${this.nome}: ${this.idade}`);
}
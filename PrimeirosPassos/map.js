const jogadores = ["Messi", "Cristiano Ronaldo", "Neymar", "Iniesta", "Modric"];
jogadores.map((elemento, index) => {
  console.log(`${elemento} - Lugar na Bola De Ouro: ${index + 1}`);
})

const converteParaInt = e => parseInt(e);
const numeros = ['1', '2', '3'].map(converteParaInt);
console.log(numeros);
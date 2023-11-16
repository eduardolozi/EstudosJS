// quando a arrow function tem só uma linha não precisa colocar chaves e nem return.
// se a arrow function tiver return, precisa colocar chaves na funcao
// estamos colocando a funcao como expressada, assim ela nao irá poder acessada por elementos que esteja acima dela no código
const contaCaracteresDeUmaString = (cadeia = "") => cadeia.length

const subString = (cadeia = "", numero = 0) => cadeia.substring(0, numero);

const converteTextoEmArrayDeStrings = (cadeia = "") => {
  return cadeia.split(" ");
}

const repeteString = (cadeia = "", repeticoes = 0) => {
  for (let i = 0; i < repeticoes; i++) {
    console.info(`${cadeia} `);
  }
}

console.info(`Oi seu noia: ${contaCaracteresDeUmaString("Oi seu noia")} caracteres.`);

console.info(`Substring de 4 letras de "Eduardo": ${subString("Eduardo", 4)}`);

console.info(`"Oi tudo bem?" separado pelos espaços: ${converteTextoEmArrayDeStrings("Oi tudo bem?")}`);

repeteString("Olá mundo", 3);

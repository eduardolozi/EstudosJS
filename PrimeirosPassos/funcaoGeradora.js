function* perguntas() {
  const nome = yield "Qual é seu nome?";
  const esporte = yield "Qual é seu esporte favorito?";
  return `Seu nome é ${nome} e seu esporte favorito é ${esporte}`;
}

const itp = perguntas();
console.log(itp.next().value);
console.log(itp.next("Eduardo").value);
console.log(itp.next("Futebol").value); 
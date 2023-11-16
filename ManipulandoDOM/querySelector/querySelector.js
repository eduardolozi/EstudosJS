//A PRIMEIRA DIV
const queryDiv = document.querySelector("div");
//SO AS DIVS
const queryTodasDivs = [...document.querySelectorAll("div")];
//SO OS ELEMENTOS DA CLASSE JOGADOR
const queryTodosJogadores = [...document.querySelectorAll(".jogador")]
//DIVS, P, H2
const queryMaisDeUmElemento = [...document.querySelectorAll("div, p, h2")];
//SO AS DIVS COM A CLASSE JOG1
const jog1 = [...document.querySelectorAll("div.jog1")];
//SO AS DIVS COM ATRIBUTO CLASS
const divClass = [...document.querySelectorAll("div[class]")]
//SO OS ELEMENTOS P DENTRO DE UMA DIV
const paragDentroDiv = [...document.querySelectorAll("div>p")]

console.log(queryDiv);
console.log(queryTodasDivs);
console.log(queryTodosJogadores);
console.log(queryMaisDeUmElemento);
console.log(jog1)
console.log(divClass)
console.log(paragDentroDiv)
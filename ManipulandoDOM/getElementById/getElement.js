let cursoDiv1 = document.getElementById("c1");
cursoDiv1.innerHTML = "Viaja nao ze";
let cursoDiv2 = document.getElementById("c2");
let cursoDiv3 = document.getElementById("c3");

const cursosDiv = [cursoDiv1, cursoDiv2, cursoDiv3];
cursosDiv.map(e => {
  console.log(e);
});


//------------------------------------------------------
//TRANSFORMAMOS A HTMLCollection em um array
const colecaoDiv = [...document.getElementsByTagName("div")];
colecaoDiv.map(e => console.log(e))


//---------------------------------------------------------
const jogadores = [...document.getElementsByClassName("jogador")];
const jog1 = [...document.getElementsByClassName("jog1")];
const jog2 = [...document.getElementsByClassName("jog2")];

jog1.map(e => {
  e.classList.add("destaque");
})

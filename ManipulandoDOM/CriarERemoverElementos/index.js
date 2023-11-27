const caixa1 = document.querySelector("#caixa1");
const cursos = ["HTML", "CSS", "JS", "PHP", "GIT", "C#"];

cursos.map((el, index) => {
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("id", "c" + (index + 1));
  novoElemento.setAttribute("class", "curso c1");
  novoElemento.innerHTML = el;

  const btn_lixeira = document.createElement("img");
  btn_lixeira.setAttribute("src", "./lixo.png")
  btn_lixeira.setAttribute("class", "botaoRemover");
  novoElemento.appendChild(btn_lixeira);

  btn_lixeira.addEventListener("click", (evt) => {
    caixa1.removeChild(evt.target.parentNode);
  });
  
  caixa1.appendChild(novoElemento);
})


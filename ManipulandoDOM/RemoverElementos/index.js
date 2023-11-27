const cursos = ["React", "SAPUI5", "C#.NET", "GIT", "SQLSERVER"];
const caixa_cursos = document.querySelector("#caixaCursos");
const btnCursoSelecionado = document.querySelector("#btnCursoSelecionado");
const btnRemoverCurso = document.querySelector("#btnRemoverCurso");

cursos.map((elemento, chave) => {
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("id", "c" + chave);
  novoElemento.setAttribute("class", "curso c1");
  novoElemento.innerHTML = elemento;

  const comandos = document.createElement("div");
  comandos.setAttribute("class", "comandos");

  const rb = document.createElement("input");
  rb.setAttribute("type", "radio");
  rb.setAttribute("name", "rbCurso");

  comandos.appendChild(rb);
  novoElemento.appendChild(comandos);
  caixa_cursos.appendChild(novoElemento);
});

const radioSelecionado = () => {
  const todosRadios = [...document.querySelectorAll("input[type=radio]")];
  let cursoSelecionado = todosRadios.filter((elemento) => {
    return elemento.checked;
  });
  return cursoSelecionado[0];
};

btnCursoSelecionado.addEventListener("click", () => {
  const rsSelecionado = radioSelecionado();
  if (rsSelecionado == undefined) alert("Selecione um curso!");
  else {
    const cursoSelecionado =
      rsSelecionado.parentNode.previousSibling.textContent;
    alert(`Curso selecionado ${cursoSelecionado}`);
  }
});

btnRemoverCurso.addEventListener("click", () => {
  const rsSelecionado = radioSelecionado();
  try {
    const cursoSelecionado = rsSelecionado.parentNode.parentNode;
    cursoSelecionado.remove();
  } catch (ex) {
    alert("Selecione um curso!");
  }
});

// parentNode
// childNodes[nodeNumber]
// firstChild
// lastChild
// nextSibling
// previousSibling

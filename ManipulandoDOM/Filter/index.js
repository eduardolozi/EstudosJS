const cursos = ["React", "SAPUI5", "C#.NET", "GIT", "SQLSERVER"];
const caixa_cursos = document.querySelector("#caixaCursos");
const btnCursoSelecionado = document.querySelector("#btnCursoSelecionado");

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
})

btnCursoSelecionado.addEventListener("click", () => {
  const todosRadios = [...document.querySelectorAll("input[type=radio]")]
  let cursoSelecionado = todosRadios.filter((elemento) => {
    return elemento.checked;
  }); 
  cursoSelecionado = cursoSelecionado[0];

  let nomeCurso = cursoSelecionado.parentNode.previousSibling.textContent;
  console.log(nomeCurso);
  alert(`Curso selecionado ${ nomeCurso }`);
})

// parentNode
// childNodes[nodeNumber]
// firstChild
// lastChild
// nextSibling
// previousSibling

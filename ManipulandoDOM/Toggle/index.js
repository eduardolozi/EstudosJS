const cursos = ["React", "SAPUI5", "C#.NET", "GIT", "SQLSERVER"];
const caixa_cursos = document.querySelector("#caixaCursos");
const btnCursoSelecionado = document.querySelector("#btnCursoSelecionado");
const btnRemoverCurso = document.querySelector("#btnRemoverCurso");
const btnAntes = document.querySelector("#btnAdicionarNovoCursoAntes");
const btnDepois = document.querySelector("#btnAdicionarNovoCursoDepois");
const nomeCursoAdd = document.querySelector("#nomeCurso");

let indice = 0;

const tirarSelecao = () => {
  const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
  cursosSelecionados.map((el) => {
    el.classList.remove("selecionado");
  });
};

const criaCurso = (nome) => {
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("id", "c" + indice);
  novoElemento.setAttribute("class", "curso c1");
  novoElemento.innerHTML = nome;
  novoElemento.addEventListener("click", () => {
    tirarSelecao();
    novoElemento.classList.toggle("selecionado");
  });

  return novoElemento;
};

cursos.map((elemento, chave) => {
  const novoElemento = criaCurso(elemento);
  caixa_cursos.appendChild(novoElemento);
  indice++;
});

const cursoSelecionado = () => {
  const curso = [...document.querySelectorAll(".selecionado")];
  return curso[0];
};

btnCursoSelecionado.addEventListener("click", () => {
  try {
    alert(`Curso selecionado ${cursoSelecionado().innerHTML}`);
  } catch (ex) {
    alert("Selecione um curso!");
  }
});

btnRemoverCurso.addEventListener("click", () => {
  try {
    cursoSelecionado().remove();
  } catch (ex) {
    alert("Selecione um curso!");
  }
});

btnAntes.addEventListener("click", () => {
  try {
    const novoCurso = criaCurso(nomeCursoAdd.value);
    caixa_cursos.insertBefore(novoCurso, cursoSelecionado());
  } catch (ex) {
    alert("Selecione um curso!");
  }
});

btnDepois.addEventListener("click", () => {
  try {
    const novoCurso = criaCurso(nomeCursoAdd.value);
    caixa_cursos.insertBefore(novoCurso, cursoSelecionado().nextSibling);
  } catch (ex) {
    alert("Selecione um curso!");
  }
});

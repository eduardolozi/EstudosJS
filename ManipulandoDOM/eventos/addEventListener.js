//--------------------COPIAR E COLAR ELEMENTOS EM OUTRA DIV------------------------------------------------
const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const btn = document.querySelector("#btn_copiar");
const todosOsJogadores = [...document.querySelectorAll(".curso")];

todosOsJogadores.map((el) => {
  el.addEventListener("click", (evt) => {
    const jogador = evt.target;
    jogador.classList.toggle("selecionado");
  });
});

btn.addEventListener("click", () => {
  const jogadoresParaCopiar = [...document.querySelectorAll(".selecionado")];
  jogadoresParaCopiar.map((el) => {
    caixa2.appendChild(el);
  });

  const jogadoresParaVoltar = [...document.querySelectorAll(".c1:not(.selecionado)")];
  jogadoresParaVoltar.map((el) => {
    caixa1.appendChild(el);
  });
});

// ------------ STOP PROPAGATION -------------------
const caixa3 = document.querySelector("#caixa3");
const cursosDentroDaCaixa3 = [...document.querySelectorAll(".c2")];

caixa3.addEventListener("click", evt => {
  console.log(evt.target + " foi clicado.")
})

cursosDentroDaCaixa3.map(el => {
  el.addEventListener("click", evt => {
    evt.stopPropagation();
  })
})



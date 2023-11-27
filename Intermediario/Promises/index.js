const numeros = document.getElementById("numeros");
const btn_numeros = document.querySelector("#btn_numeros");

const promessa = () => {
  let promise = new Promise((sucesso, falha) => {
    let resultado = true;
    let tempo = 3000;
    setTimeout(() => {
      if (resultado) sucesso("Deu tudo certo!");
      else falha("Deu tudo errado!");
    }, tempo);
  });
  return promise;
}

btn_numeros.addEventListener("click", () => {
  numeros.innerHTML = "Processando...";
  let promise = promessa();

  promise.then((retorno) => {
    numeros.innerHTML = retorno;
    numeros.classList.remove("falha");
    numeros.classList.add("sucesso");
  });

  promise.catch((retorno) => {
    numeros.innerHTML = retorno;
    numeros.classList.add("falha");
    numeros.classList.remove("sucesso");
  });
})

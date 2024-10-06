const button = document.querySelector(".form__button");
const mostrarContador = document.querySelector(".summary__transactions-value");

let contador = 0;

const contadorTransacoes = () => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    contador++;
    mostrarContador.textContent = contador;
  });
};

export { contadorTransacoes };


import { validarInput } from "./validarInputs.js";
import { api, buscarCambio } from "./buscarMoedas.js";
import { contadorTransacoes } from "./contadorDeTransacoes.js";
import { criarAtualizarCard } from "./card.js";
import { initTimer } from "./temporizador.js";
import { calcularGas } from "./taxaGas.js";

let vMoeda;
const atualizarMoeda = () => {
  const moedaSelecionada = document.getElementById("moeda").value;
  buscarCambio(moedaSelecionada, (preco) => {
    vMoeda = preco;
    console.log("vMoeda atualizado:", vMoeda);
  });
};

const moedaSelect = document.getElementById("moeda");
moedaSelect.addEventListener("change", atualizarMoeda);

const button = document.querySelector(".form__button");

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (vMoeda !== undefined) {
    const listaTeste = calcularGas(vMoeda);
    const [valorDot, valorMoeda] = listaTeste;

    criarAtualizarCard(valorDot, valorMoeda);
  } else {
    console.warn("Tente novamente.");
  }
});

api();
initTimer();
contadorTransacoes();
validarInput();

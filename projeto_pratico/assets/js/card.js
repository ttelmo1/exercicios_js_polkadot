const containerDiv = document.querySelector(".details__info");

const criarAtualizarCard = (valorDot, valorMoeda) => {
  const selecionarMoeda = document.getElementById("moeda");
  const textoSelecionado =
    selecionarMoeda.options[selecionarMoeda.selectedIndex].text;
  const formInput = document.querySelector(".form__input").value;
  const complexidade = document.getElementById("complexidade");
  const complexidadeSelecionada =
    complexidade.options[complexidade.selectedIndex].text;

  containerDiv.innerHTML += `<div class="c_card">
                <div class="info__transaction">
                  <p class="info__transaction-label">
                    Transação(Valor) : <strong>${formInput}</strong>
                  </p>
                  <p class="info__transaction-complexity">
                    Complexidade : <strong>${complexidadeSelecionada}</strong>
                  </p>
                </div>
                <div class="info__gas">
                  <p class="info__gas-dot">
                    Valor GAS em DOT: <strong>${valorDot.toFixed(
                      2
                    )} DOT</strong>
                  </p>
                  <p class="info__gas-coin">
                    Valor GAS em ${textoSelecionado} :<strong>$${valorMoeda.toFixed(2)} ${textoSelecionado}</strong>
                  </p>
               </div>`;
};

export { criarAtualizarCard };

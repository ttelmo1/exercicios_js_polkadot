const calcularCustoGas = (valorTransacao, precoGas) => {
  return valorTransacao * precoGas;
};

let precoGas;

const calcularGas = (vMoeda) => {
  const valorTransacao = document.querySelector(".form__input").value;
  const complexidade = document.getElementById("complexidade").value;

  switch (complexidade) {
    case "baixa":
      precoGas = 0.01;
      break;
    case "media":
      precoGas = 0.05;
      break;
    case "alta":
      precoGas = 0.1;
      break;
  }

  const valorDot = calcularCustoGas(valorTransacao, precoGas);
  const valorMoeda = calcularCustoGas(vMoeda, valorDot);
  const listaTeste = [valorDot, valorMoeda];

  return listaTeste;
};

export { calcularGas };

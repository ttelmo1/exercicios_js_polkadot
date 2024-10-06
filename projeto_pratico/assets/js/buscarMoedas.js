const api = () => {
  fetch("https://api.coingecko.com/api/v3/simple/supported_vs_currencies")
    .then((response) => response.json())
    .then((data) => {
      const select = document.getElementById("moeda");

      data.forEach((currency) => {
        const option = document.createElement("option");
        option.value = currency;
        option.text = currency.toUpperCase();
        select.appendChild(option);
      });
    })
    .catch((error) => console.error(error));
};

const buscarCambio = (moedaSelecionada, callback) => {
  fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=polkadot&vs_currencies=${moedaSelecionada}`
  )
    .then((response) => response.json())
    .then((data) => {
      const preco = data.polkadot[moedaSelecionada];
      callback(preco);
    })
    .catch((error) => console.error(error));
};


export { api, buscarCambio };

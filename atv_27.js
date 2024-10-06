const listaNumeros = [2, 2, 3, 1, 2, 4, 5, 10];

const somaPares = (lista) => {
  let soma = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) {
      soma += lista[i];
    }
  }
  return soma;
};

console.log(somaPares(listaNumeros));

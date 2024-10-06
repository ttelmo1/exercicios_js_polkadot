const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,1,1,1];

const quantosImpares = (lista) => {
  let c = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 !== 0) {
      c += 1;
    }
  }
  return c;
};

console.log(quantosImpares(listaNumeros));

const listaNumeros = [3, 2, 1];

const verificaOrdem = (lista) => {
  const listaOrdenada = [...lista].sort((a, b) => a - b);
  if (JSON.stringify(lista) === JSON.stringify(listaOrdenada)) {
    return true;
  }
  return false;
};

console.log(verificaOrdem(listaNumeros));
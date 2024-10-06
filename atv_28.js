const listaNumeros = [1,3,7,11,13];

const multiplicaNumerosLista = (lista) => {
  let resultado = 1;
  for (let i = 0; i < lista.length; i++) {
    resultado *= lista[i]
  }
  return resultado
};


console.log(multiplicaNumerosLista(listaNumeros))
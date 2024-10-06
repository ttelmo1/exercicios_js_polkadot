const numero = 1234;

const somaDigitos = (n) => {
  let soma = 0;
  const digitos = n.toString().split("").map(Number);
  for (let i = 0; i < digitos.length; i++) {
    soma += digitos[i];
  }
  return soma;
};

console.log(somaDigitos(numero));

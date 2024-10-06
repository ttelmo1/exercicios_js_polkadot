const numero = 35;
const numero2 = 7;

const multiplos = (n1, n2) => {
  const maior = Math.max(n1, n2);
  const menor = Math.min(n1, n2);

  if (maior % menor === 0) {
    const fator = maior / menor;
    console.log(`O número ${maior} é múltiplo de ${menor}`);
    console.log(`Pois ${menor} x ${fator} é igual a ${maior}`);
    return true;
  }
  console.log(`O número ${maior} não é múltiplo de ${menor}`);
  return false;
};

multiplos(numero, numero2);
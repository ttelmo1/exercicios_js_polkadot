const string = "Exercicio Numero 14 Codigo Brazuca E Polkadot";

const tiraEspaço = (str) => {
  const stringSemEspaço = str
    .split("")
    .filter((vazio) => vazio !== " ")
    .join("");
  return console.log(stringSemEspaço);
};

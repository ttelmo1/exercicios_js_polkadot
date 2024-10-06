const caractere = "14";
const string = "Meu nome é Wellington";

const apareceNaString = (str) => {
  if (str.toLowerCase().includes(caractere.toLowerCase())) {
    console.log(`O caractere ${caractere} está na string`)
  }
  else{
    console.log(`O caractere ${caractere} não está na string`)
  }
};

apareceNaString(string);

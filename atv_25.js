const vogais = ["a", "e", "i", "o", "u"];
const string = "As flores e o louco";

const substituiVogais = (str)=>{
    const regex = /[aeiou]/gi;
    const novaString = str.replace(regex,'*')
    return novaString
}

console.log(substituiVogais(string))
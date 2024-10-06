const vogais = ['a', 'e', 'i', 'o', 'u'];
const minhaFrase = 'Polkadot e Codigo Brazuca';

const contaVogais = (frase) => {
    let c = 0;
    for(let i = 0;i<frase.length;i++){
        if(vogais.includes(frase[i].toLowerCase()))
        c+=1
    }
    return console.log(`A frase '${frase}' tem ${c} vogais`);
}

contaVogais(minhaFrase)
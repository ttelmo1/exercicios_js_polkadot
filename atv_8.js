const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const media = (lista) =>{
    let soma =0;
    for (let i = 0; i < lista.length; i++)
        soma += lista[i]
    return console.log(soma / lista.length)
}

media(listaNumeros)
const listaNumerosBaguncados = [999,54,21,2,345,111,101,10,1,0];

const ordenar =(lista)=>{
    const listaOrdenada = lista.sort((a, b) => a - b);
    return console.log(listaOrdenada)
}

ordenar(listaNumerosBaguncados)
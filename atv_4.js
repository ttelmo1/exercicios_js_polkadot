let num1  = 1;
let num2 = 2;
const listaNumeros = []
listaNumeros.push(num1)
listaNumeros.push(num2)


const maior = (lista) =>{
    return Math.max(...lista)
}

console.log(maior(listaNumeros))
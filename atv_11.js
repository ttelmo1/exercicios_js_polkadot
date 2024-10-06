const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeroQualquer = 17;

const numeroLista = (n) => {
    if (numeros.includes(n)) {
        console.log(`O número ${n} está presente na lista`);
    } else {
        console.log(`O número ${n} não está presente na lista`);
    }
}

numeroLista(numeroQualquer);
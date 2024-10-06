const numero = 20;

const divisores = (n) => {
    const listaDivisores =[];
  for (let i = 1; i <= n; i++) {
    if(n % i === 0){
        listaDivisores.push(i);
       
    }
  }
  return listaDivisores
};

console.log(divisores(numero))
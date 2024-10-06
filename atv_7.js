const numero = 14

const primo = (n) =>{
    for (let i = 2; i < n; i++)
        if (n % i === 0) return console.log(false)
    return console.log(n > 1)
}

primo(numero)
const string = "Radar"

const palindromo =(str)=>{
    const stringInvertida = string.split('').reverse().join('')

    if(str.toLowerCase() === stringInvertida.toLowerCase()){
        console.log(`A palavra ${str} é um palíndromo`)
    }
    else{
        console.log(`A palavra ${str} não é um palíndromo`)

    }
}

palindromo(string)
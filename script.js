let numberUm 

let numberDois


numberUm = Number(prompt('Digite o primeiro numero:'))

numberDois = Number(prompt('Digite o segundo numero:'))

let sum = numberUm + numberDois 
let sub = numberUm - numberDois 
let mult = numberUm * numberDois 
let div = numberUm / numberDois 
let restoDiv = numberUm % numberDois 


alert('A soma dos dois numeros é: ' + sum)

alert('A subtração dos dois numeros é: ' + sub )

alert('A multiplicação dos dois numeros é: '+ mult)

alert('A divisão dos dois numeros é: ' + div)

alert('O resto da divisão dos dois numeros é: ' + restoDiv)


if (sum % 2 == 0) {
  alert('A soma dois dois numeros é par:')
} else {
  alert('A soma dos dois numeros é impar:')
}


if (numberUm == numberDois) {
  alert('Os dois numeros são iguais.')
}else {
  alert('Os dois numeros são diferentes.')
}




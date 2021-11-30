let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroMaior = 0;
let numeroImpar = [];
let numeroMenor = 1000;
let divisaoArray = [];

/* Exercício 1 */
for(let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index])
    /* Exercício 5 */
    if(numbers[index] > numeroMaior){
        numeroMaior = numbers[index]
    }
    /* Exercício 6 */
    if(numbers[index] % 2 != 0){
        numeroImpar.push(numbers[index])
    }
    /* Exercício 7 */
    if(numbers[index] < numeroMenor){
        numeroMenor = numbers[index]
    }
    /* Exercício 8 */
    for(index; index < numbers.length; index += 1){
        divisaoArray.push(numbers[index] / 2)
    }
}

console.log("O maior numero é:", numeroMaior)
console.log("O menor número é:", numeroMenor)
console.log("A divisão de cada elemento da array é:", divisaoArray)

if(numeroImpar.length > 0){
    console.log("A quantidade de números ímpares é de:", numeroImpar.length)
} else{
    console.log("A array não possui nenhum número ímpar.")
}

/* Exercício 2 */
let soma = 0;
for(let index = 0; index < numbers.length; index += 1){
    soma = soma + numbers[index]
}
console.log("Soma de todos os valores:", soma)

/* Exercício 3 */
let mediaAritmetica = soma / numbers.length
console.log("A media aritmética é:", mediaAritmetica)

/* Exercício 4 */
if(soma > 20){
    console.log("Valor maior que 20.")
} else if(soma === 20){
    console.log("Valor igual a 20.")
} else{
    console.log("Valor menor que 20.")
}
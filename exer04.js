/* 04) ​Crie uma função que irá receber dois valores, o dividendo e o divisor. 
A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

const divisao = (n1, n2) => {
  const result = n1 / n2
  const resto = n1 % n2

  return `Resultado: ${result}\nResto: ${resto}`
}

console.log(divisao(64, 8));
const valores = [13, 2, 4, 6, 66, 7, 1, 22, 8, 7, 100, 232, 67]

function vetorParImpar(array) {
  let par = 0
  let impar = 0
  for(let item of array) {
    if(item % 2 === 0) {
      par++
    }else {
      impar++
    }
  }
  return [par, impar]
}

console.log(vetorParImpar(valores))
function arrayNegativo(vetor) {
  let negativos = 0

  for(let i = 0; i < vetor.length; i++) {
    if(vetor[i] < 0) {
      negativos++
    }
  }

  return negativos
}

const values = [22, -4, -50, 10, -7, 25, 12, 100]

console.log(arrayNegativo(values))
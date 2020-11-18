function mediaVetor(vetor) {
  let soma = 0
  let media = 0
  
  for( let i = 0; i < vetor.length; i++) {
    soma += vetor[i]
  }
  media = soma / vetor.length
  return media
}

const values = [20, 5, 10, 100, 35]

console.log(mediaVetor(values));
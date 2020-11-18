const array = [1, 2, 3, 4, 5]

function multVetor1(vetor, num) {
  let newVetor = []
  for(let i = 0; i < vetor.length; i++) {
   newVetor.push(vetor[i] * num)
  }
  return newVetor
}

console.log(multVetor1(array, 2));
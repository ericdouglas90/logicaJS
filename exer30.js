function menorMaior(array) {
  let maior
  let menor
  for (let i = 0; i < array.length; i++) {
    if (maior === undefined && menor === undefined) {
      maior = array[i]
      menor = array[i]
    } else {
      if (array[i] > maior) {
        maior = array[i]
      }
      if (array[i] < menor) {
        menor = array[i]
      }
    }
  }

  return [maior, menor]
}

const values = [20, 5, 10, 100, 35]

console.log(menorMaior(values));
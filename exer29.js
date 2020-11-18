const valores = [13, 12, 4, 6, 66, 7, 1, 22, 8, 7, 100, 232, 67]

function intervalo(array) {
  let intTrue = 0
  let intFalse= 0
  for(let i = 0; i < array.length; i++) {
    if(array[i] >= 10 && array[i] <= 20) {
      intTrue ++
    }else {
      intFalse++
    }
  }

  return [intTrue, intFalse]
}

console.log(intervalo(valores));
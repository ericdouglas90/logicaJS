function extendNumber(num) {
  switch(num) {
    case 0:
      return 'ZERO'
    case 1:
      return 'UM'
    case 2:
      return 'DOIS'
    case 3:
      return 'TRÊS'
    case 4:
      return 'QUATRO'
    case 5:
      return 'CINCO'
    case 6:
      return 'SEIS'
    case 7:
      return 'SETE'
    case 8:
      return 'OITO'
    case 9:
      return 'NOVE'
    case 10:
      return 'DEZ'
    default:
      return 'FORA DO INTERVALO DE TEMPO'
  }
}

console.log(extendNumber(5))
console.log(extendNumber(7))
console.log(extendNumber(10))
console.log(extendNumber(80))
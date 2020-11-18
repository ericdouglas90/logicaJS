function anoBisexto(ano) {
  if(ano % 400 === 0) {
    return true
  }else if (ano % 4 === 0 && ano % 100 != 0) {
    return true
  }else {
    return false
  }
}

console.log(anoBisexto(2020))
console.log(anoBisexto(2022))
console.log(anoBisexto(2024))
console.log(anoBisexto(2023))
console.log(anoBisexto(2028))
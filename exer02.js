const triangulo = (l1, l2, l3) => {
  if(l1 !== l2 && l1 !== l3) {
    return 'Escaleno'
  }else if(l1 === l2 && l1 !== l3 || 
          l2 === l3 && l2 !== l1 || 
          l3 === l1 && l3 !== l2) {
    return 'Isósceles' 
  }else {
    return 'Equilátero'
  }
}

console.log(triangulo(1,2,3));
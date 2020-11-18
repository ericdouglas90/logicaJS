function planoSalario(plano, salario) {
  switch(plano) {
    case 'a':
    case 'A':
      return salario + (salario * 0.1)
    case 'b':
    case 'B':
      return salario + (salario * 0.15)
    case 'c':
    case 'C':
      return salario + (salario * 0.2)
  }
}

console.log(planoSalario('A', 1200))
console.log(planoSalario('b', 1200))
console.log(planoSalario('c', 1200))
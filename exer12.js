function fatorial(num) {
  let contador = 1
  const fatorial = []

  for(let i = 1; i <= num; i++) {
    contador = contador * i
    fatorial.push(contador)
  }
  return fatorial
}

console.log(fatorial(5));
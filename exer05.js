const conversao = valor => {
  return `R$${valor.toFixed(2).replace('.', ',')}`
}

console.log(conversao(0.30000000000000004));
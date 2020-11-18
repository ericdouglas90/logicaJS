const jurosComposto = (cap, i, t) => {
  const montante = cap * (Math.pow((1 + i), t))

  return `${montante.toFixed(2).replace('.', ',')}`
}

const jurosSimples = (cap, i, t) => {
  const juros = cap * i * t
  const montante = cap + juros

  return `${montante.toFixed(2).replace('.', ',')}`
}

const valor1 = jurosSimples(3000, 0.1, 0.5)
const valor2 = jurosComposto(1400, 0.07, 2)

console.log(`Juros Simples: R$${valor1}\nJuros Composto: R$${valor2}`);
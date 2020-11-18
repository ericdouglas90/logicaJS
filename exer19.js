const produtos = [
  {
    codigo: 100,
    nome: 'Cachorro Quente',
    preco: 3.00
  },
  {
    codigo: 200,
    nome: 'Hambuguer Simples',
    preco: 4.00
  },
  {
    codigo: 300,
    nome: 'Cheeseburguer',
    preco: 5.50
  },
  {
    codigo: 400,
    nome: 'Bauro',
    preco: 7.50
  },
  {
    codigo: 500,
    nome: 'Refrigerante',
    preco: 3.50
  },
  {
    codigo: 600,
    nome: 'Suco',
    preco: 2.80
  }
]

function lanchonete(item, qtd) {

  switch(item) {
    case 100:
      return `${qtd} CACHORRO QUENTE SÃO R$ ${(qtd * 3.00).toFixed(2)}`

    case 200:
      return `${qtd} HAMBÚGUER SIMPLES R$ ${(qtd * 4.00).toFixed(2)}`

    case 300:
      return `${qtd} CHEESEBURGUER R$ ${(qtd * 5.50).toFixed(2)}`

    case 400:
      return `${qtd} BAURO R$ ${(qtd * 7.50).toFixed(2)}`

    case 500: 
      return `${qtd} REFRIGERANTE R$ ${(qtd * 3.50).toFixed(2)}`

    case 600:
      return `${qtd} SUCO R$ ${(qtd * 2.80).toFixed(2)}`
  }
}

console.log(lanchonete(100, 2))
console.log(lanchonete(500, 8))
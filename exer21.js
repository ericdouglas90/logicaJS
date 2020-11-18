function planoDeSaude(idade) {
  const valorFixo = 100
  const adicional = calcularIdade(idade)

  switch(adicional) {
    case 80:
      return `O valor a ser pago é R$ ${(valorFixo + adicional).toFixed(2)}`
    
    case 50:
      return `O valor a ser pago é R$ ${(valorFixo + adicional).toFixed(2)}`
    
    case 95: 
      return `O valor a ser pago é R$ ${(valorFixo + adicional).toFixed(2)}`
    
    case 130:
      return `O valor a ser pago é R$ ${(valorFixo + adicional).toFixed(2)}`
  }
}

function calcularIdade(idade) {
  if(idade >= 60) {
    return 130
  }else if(idade >= 30 && idade < 60) {
    return 95
  }else if (idade >= 10 && idade < 30) {
    return 50
  }else if (idade < 10) {
    return 80
  }
}

console.log(planoDeSaude(30));
console.log(planoDeSaude(8));
console.log(planoDeSaude(60));
const aritimetica = (n1, n2) => {
  const result = []

  soma = n1 + n2
  sub = n1 - n2
  mult = n1 * n2
  div = n1 / n2

  result['soma'] = soma
  result['sub'] = sub
  result['mult'] = mult
  result['div'] = div

  return result
  
}

const valores = aritimetica(10, 5);

for (const key in valores) {

    console.log(`${key}: ${valores[key]}`);
    
  }
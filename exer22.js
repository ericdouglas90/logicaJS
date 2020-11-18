function calculaValor(mes, valor) {
  if(valor > 0 && valor < 13) {
    let atraso = mes - 1
    return (valor * ((1 + 0.5) ** atraso)).toFixed(2)
  }
}

console.log(calculaValor(3, 10));

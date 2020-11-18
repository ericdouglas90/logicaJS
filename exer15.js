function revendaCar(carro) {
  switch(carro) {
    case 'hatch':
      return 'Compra efetuada com sucesso!'
    case 'sedans':
      return 'Tem certeza que não prefere este modelo?'
    case 'motocicletas':
      return 'Tem certeza que não prefere este modelo?'
    case 'caminhonetes':
      return 'Tem certeza que não prefere este modelo?'

    default:
      return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}

console.log(revendaCar('sedans'));
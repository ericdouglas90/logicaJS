function hortFruit(fruta) {
  switch(fruta) {
    case 'maca': 
      return 'Não vendemos essa fruta aqui'
    case 'kiwi':
      return 'Estamos com escassez de Kiwi'
    case 'melancia':
      return 'Aqui está, são R$ 3,00 reais o Kg'
    default:
      return 'Error no sistema!!'
  }
}

console.log(hortFruit('maca'))
console.log(hortFruit('kiwi'))
console.log(hortFruit('melancia'))
console.log(hortFruit('jaca'))
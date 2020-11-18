function namesEqual(name1, name2) {
  let estaContido = true
  for(let i = 0; i < name1.length ; i++) {
    let caractereString1 = name1.charAt(i).toLowerCase()
      for(let j = 0; j < name2.length; j++) {
        let caractereString2 = name2.charAt(j).toLowerCase()
        if(caractereString1 === caractereString2) {
          estaContido = true
          break
        }else {
          estaContido = false
        }
      }
      if(!estaContido) {
        return estaContido
      }
  }

  return estaContido
}

console.log(namesEqual('abc', 'cbd'));
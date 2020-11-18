const bhaskara = (a, b, c) => {
  let delta = Math.pow(b, 2) - ( 4 * a *c )
  
    if(delta < 0) {
      return 'Delta é negativo'
    }

    delta = Math.sqrt(delta)

  let x1 = (-b + delta) / 2 * a
  let x2 = (-b - delta) / 2 * a

  const result = []
  result.push(x1, x2)

  return result
}

console.log(bhaskara(1, 3, 2));
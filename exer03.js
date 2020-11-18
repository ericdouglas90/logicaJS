/* 03)​ Crie uma função que recebe dois parâmetros, base e expoente, 
e retorne a base elevada ao expoente. */

const elev = (n1, n2) => {
  const result = Math.pow(n1, n2)

  return result
}

console.log(elev(5, 2));
 const vetorInteiro = [1, 2, 3, 4]
 const vetorString = ['Eric', 'Clivia', 'Mariana', 'Bianca']
 const vetorDouble = [1.1, 2.2, 3.3, 4.4]

 function concatenar(...args) {
   let result = []

   for(let i = 0; i < arguments.length; i++) {
     result = result.concat(arguments[i])
   }

   return result
 }


 console.log(concatenar(vetorInteiro, vetorDouble));
 console.log(concatenar(vetorInteiro, vetorString));
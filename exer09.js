function notasAlunos(nota) {
  let notaCorrigida = arredonda(nota)
  if(notaCorrigida >= 40) {
    console.log(`Aprovado com nota ${notaCorrigida}`);
  }else {
    console.log(`Reprovado com nota ${notaCorrigida}`);
  }
}

function arredonda(nota) {
  if(nota % 5 > 2) {
    return nota + (5 - (nota % 5))
  }else {
    return nota
  }
}

notasAlunos(100)
notasAlunos(38)
notasAlunos(35)
notasAlunos(88)
notasAlunos(61)
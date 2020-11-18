function mediaAluno(cod, n1, n2, n3) {
  const notas = []

  notas.push(n1, n2, n3)
  notas.sort((a,b) => a < b ? 1 : -1)

  let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
  console.log(`Código do Aluno: ${cod}. Notas: ${n1}, ${n2}, ${n3}. ${mediaFinal < 5 ?  'Reprovado. ' : 'Aprovado.'}`)
}

mediaAluno(100, 4, 4, 1)
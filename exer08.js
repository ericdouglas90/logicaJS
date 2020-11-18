const stringPontuacoes =  "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function melhorEpiorPontuacao(array) {
  const pontuacoes = stringPontuacoes.split(", ")
  let qtdQuebraDeRecords = 0
  let piorJogo = 1
  let menorPontuacao = pontuacoes[0]
  let maiorPontucao = pontuacoes[0]
  
  for(let i = 0; i < pontuacoes.length; i++) {
    if(pontuacoes[i] > maiorPontucao) {
      maiorPontucao = pontuacoes[i]
      qtdQuebraDeRecords++
    }else if(pontuacoes[i] < menorPontuacao) {
      menorPontuacao = pontuacoes[i]
      piorJogo = i + 1
    }
  }

  return [qtdQuebraDeRecords, piorJogo]
}

console.log(melhorEpiorPontuacao(stringPontuacoes));
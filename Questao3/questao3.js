// Vetor com o valor de faturamento diário da distribuidora
let faturamentoDiario = [
  22174.1664, 24537.6698, 26139.6134, 0.0, 0.0, 26742.6612, 0.0, 42889.2258,
  46251.174, 11191.4722, 0.0, 0.0, 3847.4823, 373.7838, 2659.7563, 48924.2448,
  18419.2614, 0.0, 0.0, 35240.1826, 43829.1667, 18235.6852, 4355.0662,
  13327.1025, 0.0, 0.0, 25681.8318, 1718.1221, 13220.495, 8414.61,
];

// Variáveis para armazenar o menor e o maior valor de faturamento
let menorValor = faturamentoDiario[0];
let maiorValor = faturamentoDiario[0];

// Variável para armazenar a soma do faturamento diário
let somaFaturamento = 0;

// Loop para percorrer o vetor e realizar as operações solicitadas
for (let i = 0; i < faturamentoDiario.length; i++) {
  // Verifica se o valor atual é menor que o menor valor encontrado até agora
  if (faturamentoDiario[i] < menorValor) {
    menorValor = faturamentoDiario[i];
  }

  // Verifica se o valor atual é maior que o maior valor encontrado até agora
  if (faturamentoDiario[i] > maiorValor) {
    maiorValor = faturamentoDiario[i];
  }

  // Adiciona o valor atual ao somatório do faturamento
  somaFaturamento += faturamentoDiario[i];
}

// Calcula a média do faturamento diário
let mediaFaturamento = somaFaturamento / faturamentoDiario.length;

// Variável para armazenar o número de dias com faturamento acima da média
let diasAcimaDaMedia = 0;

// Loop para percorrer o vetor e contar os dias com faturamento acima da média
for (let i = 0; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i] > mediaFaturamento) {
    diasAcimaDaMedia++;
  }
}

// Exibe os resultados das operações
console.log("Menor valor de faturamento: " + menorValor);
console.log("Maior valor de faturamento: " + maiorValor);
console.log(
  "Número de dias com faturamento acima da média: " + diasAcimaDaMedia
);

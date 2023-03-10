// Objeto com o faturamento mensal de cada estado
let faturamentoEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

// Variável para armazenar o total do faturamento mensal
let totalFaturamento = 0;

// Loop para percorrer o objeto e somar os valores de faturamento de cada estado
for (let estado in faturamentoEstados) {
  totalFaturamento += faturamentoEstados[estado];
}

// Loop para percorrer o objeto e calcular o percentual de representação de cada estado
for (let estado in faturamentoEstados) {
  let percentual = (faturamentoEstados[estado] / totalFaturamento) * 100;
  console.log(estado + ": " + percentual.toFixed(2) + "%");
}

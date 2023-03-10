// Função para verificar se um número pertence à sequência de Fibonacci
function pertenceFibonacci(num) {
  // Inicializa a sequência de Fibonacci com os dois primeiros números
  let fibonacci = [0, 1];

  // Loop para calcular a sequência até o número informado ser maior ou igual ao último número da sequência
  while (fibonacci[fibonacci.length - 1] < num) {
    // Calcula o próximo número da sequência e adiciona ao array
    let proximo =
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(proximo);
  }

  // Verifica se o número informado é igual ao último número da sequência
  if (num === fibonacci[fibonacci.length - 1]) {
    return true;
  } else {
    return false;
  }
}

// Exemplo de uso da função
let numero = parseInt(prompt("digite o numero: ")); //parseInt para garantir que o número digitado é um inteiro.
if (pertenceFibonacci(numero)) {
  console.log(numero + " pertence à sequência de Fibonacci");
} else {
  console.log(numero + " não pertence à sequência de Fibonacci");
}

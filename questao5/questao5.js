// String a ser invertida
let stringOriginal = prompt("digite a string que deseja inverter: ");

// Variável para armazenar a string invertida
let stringInvertida = "";

// Loop para percorrer a string de trás para frente e adicionar cada caractere na variável stringInvertida
for (let i = stringOriginal.length - 1; i >= 0; i--) {
  stringInvertida += stringOriginal[i];
}

// Exibindo a string invertida no console
console.log(stringInvertida);

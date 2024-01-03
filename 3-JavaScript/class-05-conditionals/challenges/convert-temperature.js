// ⚠️ Desafio 15: Crie um programa que converta a temperatura Celsius ou Fahrenheit
// A temperatura de entrada e de saída deve conter a letra de referência ('10C' ou '20F')
// O algoritmo deve ser capaz de interpretar o valor passado e converter para o outro (Ex: 10C = 50F)
// Deve funcionar com espaços, letras minúsculas e tratar dados inválidos (Throw, Try e Catch).

// F = C * 9/5 + 32
// C = (F - 32) * 5/9

function degreeConvert(degree) {
  const auxDegree = degree.split("");
  const scaleDegree = auxDegree.pop().toUpperCase();
  const newDegree = Number(auxDegree.join(""));

  if (isNaN(newDegree)) throw Error("Valor inválido!");

  if (scaleDegree == "C") {
    return (newDegree * 9) / 5 + 32 + "F";
  } else if (scaleDegree == "F") {
    return ((newDegree - 32) * 5) / 9 + "C";
  } else {
    throw new Error("Escala inválida!");
  }
}

try {
  const temperature = "212f";
  const covertedTemperature = degreeConvert(temperature);
  console.log(`${temperature} = ${covertedTemperature}`);
} catch (error) {
  console.error(error);
}

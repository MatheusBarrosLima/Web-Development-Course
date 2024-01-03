// Desafio 17:
// Crie um algoritmo que sortei os números da Mega - Sena
// São 6 números aleatórios não duplicados de 1 a 60
// Coloque em ordem crescente, com 0 a esquerda e separe com "-"

const numbersMega = [1, 18, 36, 22, ];

while (numbersMega.length < 6) {
  const numberRandom = Math.ceil(Math.random() * 60);
  const formatedNumber = String(numberRandom).padStart(2, "0");

  if (!numbersMega.includes(formatedNumber)) {
    numbersMega.push(formatedNumber);
  }
}

console.log(numbersMega.sort((a, b) => a - b).join("-"));

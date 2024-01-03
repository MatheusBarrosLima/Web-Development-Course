const userAge = 27;
const hasCNH = false;

if (userAge >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

if (userAge >= 18 && hasCNH) {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}

const average = 7;

if (average >= 7) {
  console.log("Aprovado");
} else if (average >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

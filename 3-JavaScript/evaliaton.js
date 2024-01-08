// Avaliação JavaScript

// Questão 1 (Data Types):

// Declare as seguntes variáveis e atribua os valores por tipo:
// String, Number, Boolean, Function, Array, Object

// Questão 2 (Operators):

// Imprima as operações de soma, subtração, multiplicação, divisão, resto da divisão e potenciação de 2 e 3 e raiz quadrada de 144

// Questão 3 (Functions):

// Crie e execute uma função de nome 'test" que retorne "JavaScript" concatenado com um valor passado como argumento e imprima seu retorno

// Questão 4 (Data Manipulation):

// Usando os métodos FIFO e LIFO, crie um array com 3 valos e posteriormente insira mais um valor no final e substitua o do início por outro

// Questão 5 (for):

// Liste todos os valores do array criado na questão anterior ultilizando o for

// Questão 6 (while):

// Escreva os números de 0 a 100 sem os que pertencem à familía do 40, do 50 e do 60

// Questão 7 (if):

//Crie uma lógica para verificar se o motorista foi multado
// A infração pode ser por velocidade alta (quando ultrapassar a máima)
// E por velocidade baixa ( quando estiver inferior à metade da máxima
// A velocidade da pista é de 60km/h

// Questão 8 (array methods):

//Uma empresa vai dar 10% de aumento para seus funcionários
//Abaixo tem a lista com todos os salários atuais de cada um deles
// Apresente os novos salários e o novo total em folha dessa empresa

// const salary = [2000, 2800, 3000, 4000, 2200, 7500, 3650, 8000, 2000, 5000];

// Questao 1

let studentName = "Matheus";
let number = 13;
let array = [1, 4, 6, 9, 13, 12]
function printText(text) {
   console.log(text);
    
}
let player = {
    name: "Matheus",
    age: 17,
    country: "Brasil"
}

printText ("Brasil");
printText ("Alemanha");
printText ("Italia");



console.log(typeof studentName);
console.log(typeof number);
console.log(typeof 30 == 20);
console.log(array[3]);
console.log(player.name);
console.log(player.age);
console.log(player.country);


// Questão 2 (Operators):

// Imprima as operações de soma, subtração, multiplicação, divisão, resto da divisão e potenciação de 2 e 3 e raiz quadrada de 144

let num1 = 2;
let num2 = 3;
let num3 = 144;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);
console.log(num3 ** (1 / 2));

// Questão 3 (Functions):

// Crie e execute uma função de nome 'test" que retorne "JavaScript" concatenado com um valor passado como argumento e imprima seu retorno

function test(value) {
    return "JavaScript" + value;
    
}

let result = test(" aula 1");
console.log(result);

// Questão 4 (Data Manipulation):

// Usando os métodos FIFO e LIFO, crie um array com 3 valos e posteriormente insira mais um valor no final e substitua o do início por outro

let myArray = [1, 2, 3];

console.log("Array inicial:", myArray);

myArray.push(4);

console.log("Array após adicionar no final:", myArray);

let removedItem = myArray.shift();
myArray.unshift(5);

console.log("Array após substituir o valor do início:", myArray);
console.log("Elemento removido do início:", removedItem);

// Questão 5 (for):

// Liste todos os valores do array criado na questão anterior ultilizando o for

for (let index = 2; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(index);
    
}

// Questão 6 (while):

// Escreva os números de 0 a 100 sem os que pertencem à familía do 40, do 50 e do 60

let count = 0;

while (count<=100)  {
    if (count < 40 || count >= 70)
    console.log(count);
  count++;
}


// Questão 7 (if):

//Crie uma lógica para verificar se o motorista foi multado
// A infração pode ser por velocidade alta (quando ultrapassar a máima)
// E por velocidade baixa ( quando estiver inferior à metade da máxima
// A velocidade da pista é de 60km/h

const speed = 29
const maxSpeed = 60

if (speed > maxSpeed) {
    console.log("Multado por velocidade");
  } else if (speed < maxSpeed / 2) {
    console.log("Multado por velocidade baixa");
  } else {
    console.log("Não multado!");
  }

  // Questão 8 (array methods):

//Uma empresa vai dar 10% de aumento para seus funcionários
//Abaixo tem a lista com todos os salários atuais de cada um deles
// Apresente os novos salários e o novo total em folha dessa empresa

const salary = [2000, 2800, 3000, 4000, 2200, 7500, 3650, 8000, 2000, 5000];

const newSalary = salary.map((salary) => salary + salary * (10 / 100));
console.log(newSalary);

const sumNewSalary = newSalary.reduce((a, b) => a + b);
console.log(newSalary.reduce((a, b) => a + b));



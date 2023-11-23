console.log("test");
console.log(`test`);
console.log('test');

let courseCVT = "Desenvolvimento Web";
console.log("Turma de " + courseCVT); // concatenation


let num1 = "10";
let num2 = 20;

num1 = Number(num1); //type conversion

console.log(num1 + num2); //type coersion

//grouping operator
console.log("a soma de Num1 + Num2 é " + (num1 + num2));

//interporlation
console.log("a soma de " + num1 + " e " + num2 + " = " + (num1 + num2) );

//template literal 
let sunNumbers = num1 + num2;
console.log(`A soma de ${num1} e ${num2} = ${sunNumbers}`);

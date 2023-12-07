//Binary
let num1 = 3
let num2 = 2

console.log(num1 / num2);

//Unary

console.log(++num1);

console.log(typeof num2);
console.log(typeof  "10");

//Ternary
// text / true / false

console.log(2 > 3 ? + "Sim" : "Não");

let average = 5

console.log(average >= 7 ? "Aprovado" : "Reprovado");

console.log(true ? "true" : "false");


// Truthy               Falsy
// 1, 1.5, -1           0
// " ", "0", "false"    ""
// {}                   null
// []                   undefined
// Infinity, -Infinity  NaN

console.log(-1 ? "true" : "false");
console.log(0 ? "true" : "false");
console.log(1 ? "true" : "false");
console.log("text" ? "true" : "false");
console.log(" " ? "true" : "false");
console.log("0" ? "true" : "false");
console.log("FALSE" ? "true" : "false");
console.log(null ? "true" : "false");
console.log(undefined ? "true" : "false");
console.log(-Infinity ? "true" : "false");
console.log(NaN ? "true" : "false");
console.log({} ? "true" : "false");




// Nullish/Logical Conlescing Operation
console.log("Emanuel" ||"test");
console.log(" " ||"test");
console.log(" " ||"test");

console.log(0 ?? "test");
console.log(false ?? "test");
console.log(null ?? "test");
console.log(undefined ?? "test");

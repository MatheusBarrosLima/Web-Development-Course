//Named

// parameters
function printText(text) {
    console.log(text);
}

printText("A Usurpadora"); //arguments
printText("Maria do Bairro"); //arguments
printText("Rebelde"); //arguments
printText(123); //arguments


function sumNumbers(num1 = 0, num2 = 1) {
    const sum = num1 + num2
    return (sum);
}

console.log(sumNumbers(20,3));

const result = sumNumbers(2,30)
console.log(result);

sumNumbers(200, 500)

// anonymous

const sum = function (num1,num2) {
    return num1 + num2
};

//arrow

const sumNum1Num2 = (num1, num2) => num1 + num2;
sumNum1Num2(2, 3)
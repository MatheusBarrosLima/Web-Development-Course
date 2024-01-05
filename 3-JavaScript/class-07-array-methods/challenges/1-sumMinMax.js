const numbers = [10, 2, 3, 4, 5];

console.log(
  numbers.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  })
);

console.log(numbers);
let max = numbers.filter((number, index) => {
  return index >= numbers.length - 3;
});

console.log(max);

console.log(max.reduce((a, b) => a + b));

let min = numbers.filter((number, index) =>{
    return index <= numbers.length - 3
})

console.log(min);
console.log(min.reduce((a, b) => a + b));


function sunMinMax(numbers) {
    numbers.sort((a, b) => a - b);
    // const sunMin = numbers.slice(0, 3).reduce((a, b) => a + b);
    // const sunMax = numbers.slice(-3).reduce((a, b) => a + b);
    // console.log(sunMin);
    // console.log(sunMax);
    const sunMin = numbers.filter(((value, index) => index <= 3).reduce((a, b) => a + b));
    const sunMax = numbers.filter(((value, index) => index >= numbers.length - 3));
    console.log(sunMin);
    console.log(sunMax);
}


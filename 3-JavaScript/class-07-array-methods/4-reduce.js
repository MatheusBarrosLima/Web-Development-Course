const numbers = [2, 5, 7, 20, 6, 30, 22]

console.log(numbers.reduce((a, b) => a + b));
console.log(numbers.reduce((a, b) => a - b));
console.log(numbers.reduce((a, b) => a * b));

const employeers = [
    {id: 1, name: "Emanuel", salary: 8000},
    {id: 2, name: "Maikel", salary: 9000},
    {id: 3, name: "Luiza", salary: 8000},
    {id: 4, name: "Natanael", salary: 7000},
    {id: 5, name: "Ant Carlos", salary: 8000},
    {id: 6, name: "Pedro", salary: 7000},
    {id: 7, name: "Nathan", salary: 7000},
    {id: 8, name: "Amilton", salary: 10000},
    {id: 9, name: "Matheus", salary: 10000},
    {id: 10, name: "Pablo", salary: 9000},
    {id: 11, name: "Franciele", salary: 9000},
];

console.log(employeers.reduce((a, b) => a + b.salary, 0));

let count = 0;
for(let i = 0; i < employeers.length; i++){
    count += employeers[i].salary
}
console.log(count);
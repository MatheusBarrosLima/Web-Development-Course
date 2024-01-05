const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// imutable ⭐
const filteredNumbers = numbers.filter((value) => value < 5);

console.log(numbers);
console.log(filteredNumbers);

const students = [
    {id: 1, name: "Emanuel", grade: 8},
    {id: 2, name: "Maikel", grade: 9},
    {id: 3, name: "Luiza", grade: 8},
    {id: 4, name: "Natanael", grade: 7},
    {id: 5, name: "Ant Carlos", grade: 8},
    {id: 6, name: "Pedro", grade: 7},
    {id: 7, name: "Nathan", grade: 7},
    {id: 8, name: "Amilton", grade: 10},
    {id: 9, name: "Matheus", grade: 10},
    {id: 10, name: "Pablo", grade: 9},
    {id: 11, name: "Franciele", grade: 9},
];
const studentName = prompt("Digite o nome do aluno: ")
const filteredStudents = students.filter((student) => 

student.name.toLowerCase().includes(studentName.toLowerCase()));

console.table(filteredStudents);

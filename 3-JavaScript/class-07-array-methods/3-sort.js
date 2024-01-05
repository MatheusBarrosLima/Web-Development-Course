const numbers = [1, "3", 5, 2, 9, 10, 7, 8, 4, 6];

console.log(numbers.sort((a, b) => a - b));
console.log(numbers);

const musics = [
  "Robocop gay",
  "Oceano",
  "Menina veneno",
  "o papa é pop",
  "Planeta de cores",
  "Ai se eu te pego",
  "Zói de Lula",
];

console.log(
  musics.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  })
);

const students = [
  { id: 1, name: "Emanuel", grade: 8 },
  { id: 2, name: "Maikel", grade: 9 },
  { id: 3, name: "Luiza", grade: 8 },
  { id: 4, name: "Natanael", grade: 7 },
  { id: 5, name: "Ant Carlos", grade: 8 },
  { id: 6, name: "Pedro", grade: 7 },
  { id: 7, name: "Nathan", grade: 7 },
  { id: 8, name: "Amilton", grade: 10 },
  { id: 9, name: "Matheus", grade: 10 },
  { id: 10, name: "Pablo", grade: 9 },
  { id: 11, name: "Franciele", grade: 9 },
  { id: 12, name: "Érick", grade: 9 },
];

console.log(
  students.sort((a, b) => {
    a = a.name.toLowerCase();
    b = b.name.toLowerCase();
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  })
);

console.table(students.sort((a, b) => a.name.localeCompare(b.name)));

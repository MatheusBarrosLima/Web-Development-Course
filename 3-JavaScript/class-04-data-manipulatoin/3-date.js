const dateNowMillisec = new Date().getDate()
const dateNow = new Date()

console.log(dateNowMillisec);
console.log(dateNow.toLocaleString("pt-br"));
console.log(dateNow.toLocaleDateString("pt-br"));
console.log(dateNow.toLocaleTimeString("pt-br"));

console.log(dateNow.getDay("pt-br"));
console.log(dateNow.getDate("pt-br"));
console.log(dateNow.getMonth("pt-br"));
console.log(dateNow.getFullYear("pt-br"));

dateNow.setDate(dateNow.getDate() + 30);
dateNow.setMonth(dateNow.getMonth()+ 1);
dateNow.setFullYear(dateNow.getFullYear() + 10);

console.log(dateNow.toLocaleDateString("pt-br"));

console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getSeconds());
console.log(dateNow.getMilliseconds());

dateNow.setHours(dateNow.getHours() + 23)
dateNow.setMinutes(dateNow.getMinutes() + 82)
dateNow.setSeconds(dateNow.getSeconds() + 90)
dateNow.setMilliseconds(dateNow.getMilliseconds() + 900)

console.log(dateNow.toLocaleTimeString("pt-br") + ":" + dateNow.getMilliseconds());
console.log(dateNow);

console.log(
    dateNow.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
  );

const date1 = new Date("2023-12-27")
const date2 = new Date("2023-09-25")
console.log((date1 - date2) / 1000 / 60 / 60 / 24);
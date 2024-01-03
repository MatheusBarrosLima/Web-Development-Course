let count = 10; //flag
const id = setInterval(() => {
  if (count == 0) {
    console.log("Feliz Natal");
    clearInterval(id);
    return;
  }

  console.log(count);
  count--; // container
}, 1000);

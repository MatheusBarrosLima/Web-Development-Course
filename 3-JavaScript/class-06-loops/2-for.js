for (let count = 1; count <= 10; count++) {
  if (count >= 4 && count <= 6) {
    continue;
  }

  if (count == 9) {
    break;
  }

  if (count % 2 == 0) {
    console.log(count);
  }
}

let count = 1;
while (count <= 1000) {
  if (count % 2 == 0) {
    console.log(count);
  }
  count++;
}

for (let count = 1; count <= 1000; count++) {
  if (count % 2 == 0) {
    console.log(count);
  }
}

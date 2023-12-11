function imcCalc(heigth, weigth) {
    const imc = weigth / heigth **2;
    return imc.toFixed(2);
}

console.log(imcCalc(1.85, 80));
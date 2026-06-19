//Sortear 20 numeros entre 0 e 10
count = 0;
divs = 0;
for (i = 1; i < 21; i++) {
    sorteado = Math.floor(Math.random() * 10);
    console.log(`Sorteio numero: ${i}`);
    console.log(`Sorteado: ${sorteado}`);
    if (sorteado > 5) {
        count = count + 1;
    }
    if (sorteado % 3 == 0) {
        divs = divs + 1;
    }
}
console.log(`Numeros maiores que 5: ${count}`);
console.log(`Numeros divisiveis por 3: ${divs}`);
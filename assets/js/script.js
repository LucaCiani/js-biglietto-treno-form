const distance = parseInt(prompt("Quanti Km vuoi percorrere?"));

const age = parseInt(prompt("Quanti anni hai?"));

const pricePerKm = 0.21;

const price = pricePerKm * distance;

let finalPrice;

if (age < 18) {
    finalPrice = price - price * 0.2;
} else if (age >= 65) {
    finalPrice = price - price * 0.4;
} else {
    finalPrice = price;
}

console.log(finalPrice.toFixed(2) + "€");

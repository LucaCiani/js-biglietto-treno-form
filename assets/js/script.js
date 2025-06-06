const distance = document.getElementById("distance");

const age = document.querySelector("#age");

const name = document.getElementById("name");

const sendButton = document.getElementById("send");

const resetButton = document.getElementById("reset");

const pricePerKm = 0.21;

const price = pricePerKm * parseInt(distance.value);

let finalPrice;

sendButton.addEventListener("click", (e) => {
    e.preventDefault();
    const price = pricePerKm * parseInt(distance.value);
    if (age.value == 1) {
        finalPrice = price - price * 0.2;
    } else if (age.value == 3) {
        finalPrice = price - price * 0.4;
    } else {
        finalPrice = price;
    }
    console.log(finalPrice.toFixed(2));
    document.getElementById("sendName").innerHTML += name.value;
});

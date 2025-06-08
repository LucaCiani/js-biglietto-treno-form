const distance = document.getElementById("distance");

const age = document.querySelector("#age");

const name = document.getElementById("name");

const sendButton = document.getElementById("send");

const resetButton = document.getElementById("reset");

const pricePerKm = 0.21;

const price = pricePerKm * parseInt(distance.value);

const carriage = Math.floor(Math.random() * 10) + 1;

const code = Math.floor(10000 + Math.random() * 90000);

let finalPrice;

sendButton.addEventListener("click", (e) => {
    e.preventDefault();
    const price = pricePerKm * parseInt(distance.value);
    if (age.value == 1) {
        finalPrice = price - price * 0.2;
        document.getElementById("discount").innerHTML =
            "Biglietto Minorenne (Sconto 20%)";
    } else if (age.value == 3) {
        finalPrice = price - price * 0.4;
        document.getElementById("discount").innerHTML =
            "Biglietto Anziano (Sconto 40%)";
    } else {
        finalPrice = price;
        document.getElementById("discount").innerHTML = "Biglietto Standard";
    }
    document.getElementById("sendName").innerHTML += name.value;
    document.getElementById("carriage").innerHTML += carriage;
    document.getElementById("cpCode").innerHTML += code;
    document.getElementById("price").innerHTML += finalPrice.toFixed(2);
});

resetButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("name").value = "";
    document.getElementById("distance").value = "";
    document.getElementById("sendName").innerHTML = "";
    document.getElementById("discount").innerHTML = "";
    document.getElementById("carriage").innerHTML = "";
    document.getElementById("cpCode").innerHTML = "";
    document.getElementById("price").innerHTML = "";
});

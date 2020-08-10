console.log("Hello, this is a console message!")

let price1 = 5;
let price2 = 6;
let total = price1 + price2;
const name = "Peti";
const age = 44;
let car = "VW";
let active = true;

let userAge = 33;
let userName = "Közepes Károly";

function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amount = parseInt(amountInput.value) * price;
    alert ("fizetendő: " + amount + "Ft");
}
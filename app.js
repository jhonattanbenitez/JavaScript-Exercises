const SPENDING_THRESHOLD = prompt("Accesorios a $9.99 ¿Cuánto quiere gastar en Accesorios?");
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESORY_PRICE = 9.99;

var bank_balance = prompt("celulares a $99.99 ¿Cuánto desea gastar en celulares?");
var total = 0;

function tasaImpuestos(total) {
  return total * TAX_RATE;
}

function formateoTotal(total) {
  return "$" + total.toFixed(2);
}

while (total < bank_balance) {
  total = total + PHONE_PRICE;

  if (total < SPENDING_THRESHOLD) {
    total = total + ACCESORY_PRICE;
  }
}

total = total + tasaImpuestos(total);

alert("El total de la compra es:" + formateoTotal(total));


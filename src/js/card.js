import "./dark-mode.js";
const minus = document.getElementById("btnminus");
const plus = document.getElementById("btnplus");
const text = document.getElementById("card_textt");

let counter = 0;
text.textContent = counter; // Boshlang'ich qiymatni chiqarish

plus.addEventListener("click", () => {
  counter++;
  text.textContent = counter; // Yangilash
});

minus.addEventListener("click", () => {
  counter--;
  text.textContent = counter; // Yangilash
});
console.log(counter);
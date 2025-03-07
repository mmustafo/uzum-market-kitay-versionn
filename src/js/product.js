import { fetchData } from "./fetchData";
import { showProduct } from "./updateUI.js";

const queryString = window.location.search;
const id = new URLSearchParams(queryString).get("id");
const imgg = document.getElementById("imgs");
const maxnom = document.getElementById("mxnom");
const maxnarx = document.getElementById("maxnarx");
const maxreyt = document.getElementById("maxreyt");
const maxbrend = document.getElementById("maxbrend");
const maxombor = document.getElementById("maxombor");
const maxolcham = document.getElementById("maxolcham");
const maxkg = document.getElementById("maxkg");
const maxkafolat = document.getElementById("maxkafolat");
const maxyetkazibber = document.getElementById("maxyetkazibber");
fetchData("https://dummyjson.com/product/" + id)
  .then((product) => {
    showProduct(product);
    imgg.src = product.thumbnail;
    maxreyt.textContent = product.rating;
    maxbrend.textContent = product.brand;
    maxnom.textContent = product.title;
    maxolcham.textContent = product.dimensions.width;
    maxkg.textContent = product.weight;
    maxkafolat.textContent = product.warrantyInformation;
    maxnarx.textContent = product.price;
  })
  .catch(() => {
    console.log(error);
  });
const minus = document.getElementById("btnminus");
const plus = document.getElementById("btnplus");
const text = document.getElementById("card_textt");

let counter = 1;
text.textContent = counter;

plus.addEventListener("click", () => {
  counter += 1;
  text.textContent = counter;
});

minus.addEventListener("click", () => {
  counter--;
  text.textContent = counter;
});
console.log(counter);

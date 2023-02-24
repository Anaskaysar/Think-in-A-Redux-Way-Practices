const counterEl = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

// initial states

let count = 0;

//event listers

incrementButton.addEventListener("click", () => {
  count++;
  counterEl.innerText = count;
});

// decrementButton.addEventListener("click", () => {
//   count--;
//   counterEl.innerText = count;
// });

decrementButton.addEventListener("click", () => {
  count--;
  counterEl.innerText = count;
});

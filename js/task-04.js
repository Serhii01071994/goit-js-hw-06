const counterValue = document.querySelector("#value");
const buttonDecr = document.querySelector('[data-action="decrement"]');
const buttonIncr = document.querySelector('[data-action="increment"]');

let value = 0;

buttonDecr.addEventListener("click", () => {
  value -= 1;
  counterValue.textContent = value;
});

buttonIncr.addEventListener("click", () => {
  value += 1;
  counterValue.textContent = value;
});

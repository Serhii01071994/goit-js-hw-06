const widget = document.querySelector(".widget");
const changeBtn = document.querySelector(".change-color");
const color = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeBtn.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorText.textContent = newColor;
});

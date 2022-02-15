function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const widgetRef = document.querySelector(".widget");
const spanRef = widgetRef.querySelector(".color");
const btnRef = widgetRef.querySelector(".change-color");
btnRef.addEventListener("click", onClickChangeColor);

function onClickChangeColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = bodyRef.style.backgroundColor;
}
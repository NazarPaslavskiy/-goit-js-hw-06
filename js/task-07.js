
const textSpan = document.querySelector(`#text`);
const input = document.querySelector(`#font-size-control`)
console.log(input)
console.log(textSpan.textContent)
textSpan.style.fontSize = input.value + "px";
input.addEventListener(`input`, function () {    textSpan.style.fontSize = input.value + "px";});
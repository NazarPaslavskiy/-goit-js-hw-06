const buttonDecr = document.querySelector('button[data-action="decrement"]');
const buttonIncr = document.querySelector('button[data-action="increment"]');
const counterValueDisplay = document.querySelector('#value');
let counterValue = 0 ;

const oneClickDecr = event => {
    counterValueDisplay.textContent = counterValue -= 1;
};

const oneClickIncr = event => {
    counterValueDisplay.textContent = counterValue += 1;
}

buttonDecr.addEventListener("click", oneClickDecr);
buttonIncr.addEventListener("click", oneClickIncr);
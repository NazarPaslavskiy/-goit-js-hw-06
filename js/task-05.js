// input#name-input
// span#name-output
// const imp = document.querySelector('#name-input');
// const impE = document.querySelector('#name-output')
// console.log(imp, impE)

const ref = {
input : document.querySelector('#name-input'),
output : document.querySelector('#name-output')
};
ref.input.addEventListener('input', onInputChange);
function onInputChange (event) {
ref.output.textContent = event.currentTarget.value;

    if (event.currentTarget.value === "") {
        ref.output.textContent = "Anonymous";
      }
      
};

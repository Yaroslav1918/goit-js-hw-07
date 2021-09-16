
const inputEl = document.getElementById('name-input');
const spanEl = document.getElementById('name-output')
inputEl.addEventListener('input', onInputChange)
// console.log(spanEl)



function onInputChange(event) {
    spanEl.textContent = event.currentTarget.value
}



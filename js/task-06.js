
const inputEl = document.getElementById('validation-input');
inputEl.addEventListener('blur', onInputCheck)


function onInputCheck(event) {
    if (event.currentTarget.value.length >= 6) {
       return inputEl.classList.add('valid')
    }
    return inputEl.classList.add('invalid')
}
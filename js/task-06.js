
const inputEl = document.getElementById('validation-input');
inputEl.addEventListener('blur', onInputCheck)


function onInputCheck(event) {
    return  event.currentTarget.value.length >= 6 ? inputEl.classList.add('valid') : inputEl.classList.add('invalid')
      
    }
    
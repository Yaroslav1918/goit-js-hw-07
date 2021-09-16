
const spanValueEl = document.getElementById('value')
const decremBtnEl = document.querySelector('[data-action="decrement"]')
decremBtnEl.addEventListener('click', handleDecremBtnElClick);
const incremBtnEl = document.querySelector('[data-action="increment"]')
incremBtnEl.addEventListener('click', handleIncremBtnElClick);
const counterValue = spanValueEl;

function handleIncremBtnElClick () {
    return counterValue.textContent ++;
    
    }

    function handleDecremBtnElClick () {
     return counterValue.textContent --;
    }


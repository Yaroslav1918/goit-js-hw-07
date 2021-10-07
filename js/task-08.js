
const divEl = document.querySelector('#boxes')
const inputEl = document.querySelector('input')
const buttonCreateEl = document.querySelector('[data-action="render"]')
buttonCreateEl.addEventListener('click', getAmount)
const buttonDeleteEl = document.querySelector('[data-action="destroy"]')
buttonDeleteEl.addEventListener('click', destroyBoxes)

function getAmount() {
   const amount = inputEl.value;

  createBoxes(amount)
}

function createBoxes(amount) {

  for (let i = 0; i < amount; i += 1) {
    let size = 30 + i * 10;
    const container = document.createElement("div");
    container.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;

    divEl.insertAdjacentElement('beforeend', container)
  }
}

function destroyBoxes() {
    divEl.innerHTML = "";
}

function random() {
  return Math.floor(Math.random() * 256);
}



const inputEl = document.getElementById('font-size-control')
inputEl.addEventListener('input', onSpanChangeFontSize)
const spanEl = document.getElementById('text')


function onSpanChangeFontSize(event) {
    spanEl.style.fontSize = event.currentTarget.value + "px";
}
    
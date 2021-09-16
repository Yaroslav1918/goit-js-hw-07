
const listById = document.getElementById('categories');

let items = [...listById.children].map((li) => {
    return [...li.children];
});


let titles = items.map(child => child.find(obj => obj.nodeName === "H2" ).textContent);
console.log(...titles);
let innerList = items.map(child => child.find(obj => obj.nodeName === "UL" ).children.length);
console.log(...innerList);
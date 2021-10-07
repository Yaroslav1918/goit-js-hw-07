
// const listById = document.getElementById('categories');

// let items = [...listById.children].map((li) => {
//     return [...li.children];
// });


// let titles = items.map(child => child.find(obj => obj.nodeName === "H2" ).textContent);
// console.log(...titles);
// let innerList = items.map(child => child.find(obj => obj.nodeName === "UL" ).children.length);
// console.log(...innerList);



const listById = document.querySelector('#categories');
const items = listById.querySelectorAll('.item');
console.log(`В списке ${items.length} категории:`);
items.forEach(node => {
const h2 = node.querySelector('h2');
const nodeItems = node.querySelectorAll('li');
console.log(` - категория: ${h2.textContent} (количество элементов: ${nodeItems.length})`);
});
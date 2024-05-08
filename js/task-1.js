const ulEl = document.querySelector('#categories');
const liEl = ulEl.querySelectorAll('.item');

console.log(`Number of categories: ${liEl.length}`);

liEl.forEach(elem => {
  const titleEl = elem.querySelector('h2').textContent;
  const liLength = elem.querySelectorAll('li').length;

  console.log(`Category: ${titleEl}`);
  console.log(`Elements: ${liLength}`);
});

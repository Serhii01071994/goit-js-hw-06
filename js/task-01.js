const categoriesList = document.querySelector("#categories");
const categories = categoriesList.children;
console.log(`Number of categories: ${categories.length}`);

Array.from(categories).forEach((category) => {
  const categoryName = category.firstElementChild.textContent;
  const categoryItems = category.lastElementChild.children.length;
  console.log(`Category: ${categoryName}\nElements: ${categoryItems}`);
});

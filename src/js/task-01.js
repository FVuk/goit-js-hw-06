const liItems = document.querySelectorAll(".item");
console.log("Number of categories: " + liItems.length);

liItems.forEach((liItem) => {
  const header = liItem.querySelector("h2");
  const headerText = header.textContent;
  console.log("Category: " + headerText);
  const element = liItem.querySelectorAll("li");
  console.log("Elements: " + element.length);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  const newElements = [];
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");
    const newBoxSize = `${30 + 10 * i}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.width = newBoxSize;
    newBox.style.height = newBoxSize;
    newElements.push(newBox);
  }
  return newElements;
}

createBtn.addEventListener("click", () => {
  let newBoxes = createBoxes(input.value);
  boxes.append(...newBoxes);
});

destroyBtn.addEventListener("click", () => {
  input.value = "";
  boxes.innerHTML = "";
});

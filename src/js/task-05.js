const nameInput = document.getElementById("name-input");
const output = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  if (nameInput.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = nameInput.value;
  }
});

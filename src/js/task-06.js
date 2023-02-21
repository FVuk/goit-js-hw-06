const textInput = document.querySelector("input");
const inputLength = Number(textInput.dataset.length);

textInput.addEventListener("blur", () => {
  if (textInput.value.length === inputLength) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});

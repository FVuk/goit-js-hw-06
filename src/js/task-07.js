const controlBar = document.querySelector("input");
const textSpan = document.querySelector("#text");

controlBar.addEventListener("input", () => {
  textSpan.style.fontSize = controlBar.value + "px";
});

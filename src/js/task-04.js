let counterValue = 0;

const counterDown = document.querySelector('[data-action="decrement"]');
const counterUp = document.querySelector('[data-action="increment"]');

let display = document.getElementById("value");

const buttonClickedDown = () => {
  counterValue--;
  display.textContent = counterValue;
};

const buttonClickedUp = () => {
  counterValue++;
  display.textContent = counterValue;
};

counterDown.addEventListener("click", buttonClickedDown);
counterUp.addEventListener("click", buttonClickedUp);

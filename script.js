let result = 4;

function updateDisplay() {
  document.getElementById("result").textContent = `جمع: ${result}`;
}

function addFive() {
  result += 5;
  updateDisplay();
}

function subtractThree() {
  result -= 3;
  updateDisplay();
}

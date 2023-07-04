const regex = /^[0-9*+.\/%()-]+$/;
const regexNumber = /^[0-9]+$/;
const equation = document.querySelector(".input");
const btnContainer = document.querySelector(".btn_container");
const display = document.querySelector(".display");
let operator;
let userInput = "";
let currentInputValue = "";
document.onmousedown = (e) => {
  e.preventDefault();
};
btnContainer.addEventListener("input", function inputInputEventHandler(e) {
  const target = e.target;
  if (target.value === "") {
    currentInputValue = target.value;
    target.value = "";
    display.classList.remove("error");
  }
  regex.test(target.value)
    ? (currentInputValue = target.value)
    : (target.value = currentInputValue);
  userInput = currentInputValue;
  //console.log(target.value);
});
btnContainer.addEventListener("click", (event) => {
  let btnPressed = event.target.innerHTML;
  //console.log(btnPressed);
  if (regex.test(btnPressed)) {
    equation.value = equation.value + btnPressed;
    currentInputValue = userInput = equation.value;
  } else if (btnPressed === "=") {
    if (userInput.length === 0) {
    } else {
      calculate();
    }
  } else if (btnPressed === "C") {
    currentInputValue = userInput = equation.value = "";
  }
});
document.addEventListener("keyup", (event) => {
  //console.log(event.key);
  let eventKey = event.key;
  if (eventKey === "Enter") {
    if (userInput.length === 0) {
    } else {
      calculate();
    }
  }
});
function calculate() {
  // console.log(userInput);
  let operand1 = "";
  let operand2 = "";
  let i = 0;
  while (
    userInput[i] != "+" &&
    userInput[i] != "-" &&
    userInput[i] != "*" &&
    userInput[i] != "/" &&
    userInput[i] != "%"
  ) {
    if (i === userInput.length) {
      break;
    }
    operand1 = operand1 + userInput[i];
    i++;
  }
  operator = userInput[i];
  i++;
  while (i < userInput.length) {
    operand2 = operand2 + userInput[i];
    i++;
  }
  switch (operator) {
    case "+":
      operand1 = Number(operand1);
      operand2 = Number(operand2);
      if (operand1 === "") {
        operand1 = 0;
      }
      if (operand2 === "") {
        operand2 = 0;
      }
      equation.value = operand1 + operand2;
      break;
    case "-":
      operand1 = Number(operand1);
      operand2 = Number(operand2);
      if (operand1 === "") {
        operand1 = 0;
      }
      if (operand2 === "") {
        operand2 = 0;
      }
      equation.value = operand1 - operand2;
      break;
    case "*":
      if (operand1 === "" || operand2 === "") {
        display.classList.add("error");
      } else {
        operand1 = Number(operand1);
        operand2 = Number(operand2);
        display.classList.remove("error");
        equation.value = operand1 * operand2;
        break;
      }
    case "/":
      if (operand1 === "" || operand2 === "") {
        display.classList.add("error");
      } else {
        operand1 = Number(operand1);
        operand2 = Number(operand2);
        display.classList.remove("error");
        equation.value = operand1 / operand2;
        break;
      }
    case "%":
      if (operand1 === "" || operand2 === "") {
        display.classList.add("error");
      } else {
        operand1 = Number(operand1);
        operand2 = Number(operand2);
        display.classList.remove("error");
        equation.value = operand1 % operand2;
        break;
      }
  }
}

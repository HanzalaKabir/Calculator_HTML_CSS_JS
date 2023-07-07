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
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    equation.readOnly = true;
    console.log("readonly");
  } else {
    equation.readOnly = false;
    console.log("N-readonly");
  }
}

var x = window.matchMedia("(max-width: 700px)");
myFunction(x);
x.addListener(myFunction); 
function calculate() {
  // console.log(userInput);
  let result = Function("return " + userInput)();
  console.log(result);
  equation.value = result;
}

let userInput = "+852";
console.log(userInput);
let operator;
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
  console.log(userInput[i]);
  operand1 = operand1 + userInput[i];
  i++;
}
if (operand1 === "") {
  operand1 = 0;
}
console.log(userInput[i]);
operator = userInput[i];
i++;
while (i < userInput.length) {
  console.log(userInput[i]);
  operand2 = operand2 + userInput[i];
  i++;
}
if (operand2 === "") {
  operand2 = 0;
}
console.log(operand1 + " " + operand2);
switch (operator) {
  case "+":
    equation.value = operand1 + operand2;
    break;
  case "-":
    equation.value = operand1 - operand2;
    break;
  case "*":
    equation.value = operand1 * operand2;
    break;
  case "/":
    equation.value = operand1 / operand2;
    break;
  case "%":
    equation.value = operand1 % operand2;
    break;
}
console.log(equation.value);

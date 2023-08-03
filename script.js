// criar funcoes de soma, subtracao, multiplicacao, divisao

let numA = "";
let numB = "";
let operator = "";
let result = "";



const display = document.querySelector(".display");
display.innerHTML = "0";

const operationAdd = function (a, b) {
  return Number(a) + Number(b);
};

const operationSubtract = function (a, b) {
  return a - b;
};

const operationMultiply = function (a, b) {
  return a * b;
};

const operationDivide = function (a, b) {
  if (b === "0") {
    alert("Cannot divide by zero!");
    return 0;
  }
  return a / b;
};

const operate = function (a, b, operator) {
  if (operator === "+") {
    return operationAdd(a, b);
  } else if (operator === "-") {
    return operationSubtract(a, b);
  } else if (operator === "*") {
    return operationMultiply(a, b);
  } else if (operator === "/") {
    return operationDivide(a, b);
  }
};

const clearData = function () {
  numA = "";
  numB = "";
  operator = "";
  result = "";
  display.innerHTML = 0;
};

const updateDisplay = function () {
  if (operator === "/") {
    display.innerHTML = `${numA}<span class="operator">÷</span>${numB}`;
  } else if (operator === "*") {
    display.innerHTML = `${numA}<span class="operator">×</span>${numB}`;
  } else {
    display.innerHTML = `${numA}<span class="operator">${operator}</span>${numB}`;
  }
};
const handleNumberInput = function (value) {
  if (!numB && !operator) {
    numA += value;
    display.innerHTML = numA;
  } else if (numA && operator) {
    numB += value;
    updateDisplay()
  }
};

const handleOperatorInput = function (value) {
  if (!operator) {
    numB ='';
    operator = value;
    display.innerHTML = numA ;
  }
  if (operator) {
    numB =''
    result='';
    handleEqual();
    operator = "";
    operator = value;
    updateDisplay()
  }
  if (!numA) {
    numA = '';
    operator = '';
    display.innerHTML = '0';
  }
};

const handleEqual = function () {
  let lastNumber = numB;
  if (numA && numB && operator) {
    result = operate(numA, numB, operator);
      if(result.length > 9) {
        result = result.slice(0, 9);
      }
    numA = result.toString();
    display.innerHTML = numA;
  }
  if (result) {
    numA = result.toString();
    operator = operator;
    numB = lastNumber;
    display.innerHTML = numA;
  }
};

const handleBackSpace = function () {
  if (numB) {
    numB = numB.slice(0, -1);
    updateDisplay();
  } else if (operator) {
    operator = operator.slice(0, -1);
    updateDisplay();
  } else if (numA) {
    numA = numA.slice(0, -1);
    display.innerHTML = numA;
    if (numA === "") {
      display.innerHTML = 0;
    }
  }
};

const handlePercent = function () {
  if (!numB && numA != 0) {
    numA /= 100;
    display.innerHTML = numA;
  } else {
    if (operator === "/" || operator === "*") {
      numB = (numB / 1000) * numA;
      updateDisplay();
    } else if (numA ===0 || numA === "") {
        numA = '';
        operator = '';
        display.innerHTML = '0';
    }else {
      numB = (numB / 100) * numA;
      updateDisplay();
    }
    
  }
};

const handleDotKey = function () {
  if (operator && numB === "") {
    numB = "0.";
    updateDisplay();
  } else if (operator && numB && !numB.includes(".")) {
    numB += ".";
    updateDisplay();
  } else if (numA === "") {
    numA = "0.";
    display.innerHTML = numA;
  } else if (numA && !numA.includes(".")) {
    numA += ".";
    display.innerHTML = numA;
  }
};

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.dataset.value;
    const className = e.target.className;

    if (value && className === "number-key") {
      handleNumberInput(value);
    }

    if (value && className === "operator-key") {
      handleOperatorInput(value);
    }

    if (className === "backspace-key") {
      handleBackSpace();
    }

    if (className === "equal-key") {
      handleEqual();
    }

    if (className === "clear-key") {
      clearData();
    }

    if (className === "percent-key") {
      handlePercent();
    }

    if (className === "dot-key") {
      handleDotKey();
    }

    console.log("numA", numA);
    console.log("operator", operator);
    console.log("numB", numB);
    console.log("result", result);
  });
});


document.onkeydown = e  => {
  switch (e.key) {
    case "Backspace":
      handleBackSpace();
      break;
    case "Escape":
      clearData();
      break;
    case "Enter":
      handleEqual();
      break;
    case ".":
      handleDotKey(); 
      break;
      case "Enter":
      handleEqual();
      break;
      case ",": 
      handleDotKey();
      break;
      case "%":
      handlePercent();
         
  }

  const numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  if (numberList.includes(e.key)) {
    handleNumberInput(e.key);
  }

  const operatorList = ["+", "-", "*", "/"]
  if (operatorList.includes(e.key)) {
    handleOperatorInput(e.key);
  }
  
  
}

// criar funcoes de soma, subtracao, multiplicacao, divisao

let numA
let numB
let operator

const operationAdd = function(a, b) {
	return a + b
};

const operationSubtract = function(a, b) {
	return a - b
};

const operationMultiply = function(a, b) {
	return a * b
};

const operationDivide = function(a, b) {
	return a / b 
};

const operate = function(a, b, operator ) {
	if (operator === '+') {
		return operationAdd(a,b)
	} else if (operator === '-') {
		return operationSubtract(a,b)
	} else if (operator === '*') {
		return operationMultiply(a,b)
	} else if (operator === '/') {
		return operationDivide(a,b)
	}

}

console.log(operate(2,5,'+'))
// console.log(operationAdd(2,7))
// console.log(operationSubtract(2,7))
// console.log(operationDivide(2,7))
// console.log(operationMultiply(2,7))
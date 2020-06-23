const defaultResult = 0;
let currentResult = defaultResult;
const logEntry = [];

function inputs() {
    return parseInt(input.value);
}

function actionTracker(operation,initialResult,enteredNumber,result) {
    const dict = {
        operation: operation,
        initialResult: initialResult,
        enteredNumber: enteredNumber,
        result: result
    }
    logEntry.push(dict);
    console.log(logEntry);
}

function output(currentResult,operator, enteredNumber, initialResult) {
    let discription = `${initialResult} ${operator} ${enteredNumber}`;
    document.getElementById("calcDiscription").innerHTML = discription;
    document.getElementById("currentResult").innerHTML = currentResult;
}

function calculation(typeOperator) {
    const enteredNumber = inputs();
    
    if (!enteredNumber) {
        return;
    }

    const initialResult = currentResult;
    if (typeOperator === "+") {
        currentResult = currentResult + enteredNumber;
    } else if (typeOperator === "-") {
        currentResult = currentResult - enteredNumber;
    } else if (typeOperator === "*") {
        currentResult = currentResult * enteredNumber;
    } else if (typeOperator === "/") {
        currentResult = currentResult / enteredNumber;
    }

    output(currentResult,typeOperator,enteredNumber,initialResult);
    actionTracker(typeOperator,initialResult,enteredNumber,currentResult);
}
    




function add() {
    calculation("+");
}

function subtract() {
    calculation("-");
}

function multiply() {
    calculation("*");
}

function divide() {
    calculation("/");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
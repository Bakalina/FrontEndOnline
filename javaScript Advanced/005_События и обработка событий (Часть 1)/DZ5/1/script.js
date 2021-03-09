
// DOM level0

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let toSplit = document.getElementById("toSplit");
let result = document.getElementById("result");

plus.onclick = function () {
    let operandOne = Number(document.getElementById("operandOne").value);
    let operandTwo = Number(document.getElementById("operandTwo").value);

    let res = operandOne + operandTwo;
    result.textContent = res;

}
minus.onclick = function () {
    let operandOne = Number(document.getElementById("operandOne").value);
    let operandTwo = Number(document.getElementById("operandTwo").value);

    let res = operandOne - operandTwo;
    result.textContent = res;

}
multiply.onclick = function () {
    let operandOne = Number(document.getElementById("operandOne").value);
    let operandTwo = Number(document.getElementById("operandTwo").value);

    let res = operandOne * operandTwo;
    result.textContent = res;

}
toSplit.onclick = function () {
    let operandOne = Number(document.getElementById("operandOne").value);
    let operandTwo = Number(document.getElementById("operandTwo").value);

    let res = operandOne / operandTwo;
    result.textContent = res;

}
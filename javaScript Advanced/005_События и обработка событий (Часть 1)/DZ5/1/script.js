// DOM level0

// let plus = document.getElementById("plus");
// let minus = document.getElementById("minus");
// let multiply = document.getElementById("multiply");
// let toSplit = document.getElementById("toSplit");
// let operator;

// function calc() {
//     let operandOne = Number(document.getElementById("operandOne").value);
//     let operandTwo = Number(document.getElementById("operandTwo").value);
//     let result = 0;

//     switch (operator) {
//         case '+':
//             result = operandOne + operandTwo;
//             break;
//         case '-':
//             result = operandOne - operandTwo;
//             break;
//         case '*':
//             result = operandOne * operandTwo;
//             break;
//         case '/':
//             if (operandTwo != 0) {
//                 result = operandOne / operandTwo;
//             } else {
//                 result = "Бесконечность"
//             }
//             break;
//     }

//     document.getElementById("result").innerHTML = result;
// }

// plus.onclick = function () {
//     operator = "+";
//     calc();
// }

// minus.onclick = function () {
//     operator = "-";
//     calc();
// }

// multiply.onclick = function () {
//     operator = "*";
//     calc();
// }

// toSplit.onclick = function () {
//     operator = "/";
//     calc();
// }

// -------------------------------------------------------------------------------------



// DOM level2

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let toSplit = document.getElementById("toSplit");
let operator;

function calc() {
    let operandOne = Number(document.getElementById("operandOne").value);
    let operandTwo = Number(document.getElementById("operandTwo").value);
    let result = 0;

    switch (operator) {
        case '+':
            result = operandOne + operandTwo;
            break;
        case '-':
            result = operandOne - operandTwo;
            break;
        case '*':
            result = operandOne * operandTwo;
            break;
        case '/':
            if (operandTwo != 0) {
                result = operandOne / operandTwo;
            } else {
                result = "Бесконечность"
            }
            break;
    }

    document.getElementById("result").innerHTML = result;
}

plus.addEventListener("click", function () {
    operator = "+";
    calc();
})
minus.addEventListener("click", function () {
    operator = "-";
    calc();
})
multiply.addEventListener("click", function () {
    operator = "*";
    calc();
})
toSplit.addEventListener("click", function () {
    operator = "/";
    calc();
})
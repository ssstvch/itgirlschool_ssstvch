'use strict';

function result() {
    let zeroBlock = document.getElementById("zeroBlock");
    let getNum1 = document.getElementById('firstNum');
    let getNum2 = document.getElementById('secondNum');
    console.log(getNum1.value);
    let num1 = getNum1.value;
    let num2 = getNum2.value;
    let selAct = document.getElementById('act');
    let act = selAct.options[selAct.selectedIndex].text;
    switch (act) {
        case '+':
            zeroBlock.innerHTML = `Результат сложения: ${num1} + ${num2} = ${+num1 + +num2}`;
            document.body.appendChild(zeroBlock);
            break;
        case '—':
            zeroBlock.innerHTML = `Результат вычитания: ${num1} — ${num2} = ${+num1 - +num2}`;
            document.body.appendChild(zeroBlock);
            break;
        case '*':
            zeroBlock.innerHTML = `Результат умножения: ${num1} * ${num2} = ${+num1 * +num2}`;
            document.body.appendChild(zeroBlock);
            break;
        case '/':
            zeroBlock.innerHTML = `Результат деления: ${num1} / ${num2} = ${+num1 / +num2}`;
            document.body.appendChild(zeroBlock);
            break;
    } 
}




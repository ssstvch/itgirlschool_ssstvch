'use strict';

function result() {
    let zeroBlock = document.getElementById("zeroBlock");
    zeroBlock.parentNode.removeChild(zeroBlock);
    let getNum1 = document.getElementById('firstNum');
    let getNum2 = document.getElementById('secondNum');
    console.log(getNum1.value);
    let num1 = getNum1.value;
    let num2 = getNum2.value;
    let selAct = document.getElementById('act');
    let act = selAct.options[selAct.selectedIndex].text;
    let div = document.createElement('div');
    div.id = "zeroBlock";
    if (act == '+') {
        div.innerHTML = `Результат сложения: ${num1} + ${num2} = ${+num1 + +num2}`;
        document.body.appendChild(div);
    } else if (act == '—') {
        div.innerHTML = `Результат вычитания: ${num1} — ${num2} = ${+num1 - +num2}`;
        document.body.appendChild(div);
    } else if (act == '*') {
        div.innerHTML = `Результат умножения: ${num1} * ${num2} = ${+num1 * +num2}`;
        document.body.appendChild(div);
    } else if (act == '/') {
        div.innerHTML = `Результат деления: ${num1} / ${num2} = ${+num1 / +num2}`;
        document.body.appendChild(div);
    }
    document.getElementById("calc").reset();
}
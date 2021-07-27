'use strict';

function result() {
    let zeroBlock = document.getElementById("zeroBlock");
    let getNum1 = document.getElementById('firstNum');
    let getNum2 = document.getElementById('secondNum');
    let num1 = getNum1.value;
    let num2 = getNum2.value;
    let selAct = document.getElementById('act');
    let act = selAct.options[selAct.selectedIndex].text;
    if (isNaN(num1) || isNaN(num2)) {
        alert(`Введите корректное число!`);
    } else {
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
                if (num2 == 0) {
                    zeroBlock.innerHTML = `На ноль делить нельзя!`;
                } else {
                    zeroBlock.innerHTML = `Результат деления: ${num1} / ${num2} = ${+num1 / +num2}`;
                    document.body.appendChild(zeroBlock);
                }
                break;
        } 
    }
}




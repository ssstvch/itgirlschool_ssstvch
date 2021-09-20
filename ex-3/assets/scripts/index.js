'use strict';

let zeroBlock = document.querySelector("#zeroBlock"),
    getNum1 = document.querySelector('#firstNum'),
    getNum2 = document.querySelector('#secondNum'),
    btn = document.querySelector('.button'),
    selAct = document.querySelector('#act'),
    act;


btn.addEventListener('click', () => {
    // Убираем стандартное действие по клику
    event.preventDefault();

    // Вызываем функцию калькулирования
    culc();
});


const culc = () => {

    let num1 = +getNum1.value,
        num2 = +getNum2.value,
        act = selAct.options[selAct.selectedIndex].text;

    if (num1 === 0 && num2 === 0) {
        zeroBlock.innerHTML = `Введите числа`;
        document.body.appendChild(zeroBlock);
    } else if (act === "/" && num2 === 0){
        zeroBlock.innerHTML = `На ноль делить нельзя`;
        document.body.appendChild(zeroBlock);
    } else {
        switch (act) {
            case '+': Calc.sum(num1, num2); break
            case '—': Calc.sub(num1, num2); break
            case '*': Calc.mult(num1, num2); break
            case '/': Calc.division(num1, num2); break
        } 
    }

}

class Calc {
    // Конструктор класса - принимает числа, полученные с формы
    constructor (num1, num2) {
        this.num1 = +num1;
        this.num2 = +num2;
    }
    
    // Создаём статические методы класса

    static sum(a, b) {
        zeroBlock.innerHTML = `Результат сложения: ${a} + ${b} = ${a + b}`;
        document.body.appendChild(zeroBlock);

    }

    static sub(a, b) {
        zeroBlock.innerHTML = `Результат вычитания: ${a} — ${b} = ${a - b}`;
        document.body.appendChild(zeroBlock);
    }

    static mult(a, b) {
        zeroBlock.innerHTML = `Результат умножения: ${a} * ${b} = ${a * b}`;
        document.body.appendChild(zeroBlock);
    }

    static division(a, b) {
        zeroBlock.innerHTML = `Результат деления: ${a} / ${b} = ${a / b}`;
        document.body.appendChild(zeroBlock);
    }
}


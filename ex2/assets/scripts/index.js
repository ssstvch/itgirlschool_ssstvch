'use strict';

function add() {
    let x = prompt(`Введите первое число:`);
    let y = prompt(`Введите второе число:`);
    alert(`Результат сложения: ${x} + ${y} = ${+x + +y}`);
}

function sub() {
    let x = prompt(`Введите первое число:`);
    let y = prompt(`Введите второе число:`);
    alert(`Результат вычитания: ${x} - ${y} = ${+x - +y}`);
}

function multi() {
    let x = prompt(`Введите первое число:`);
    let y = prompt(`Введите второе число:`);
    alert(`Результат умножения: ${x} * ${y} = ${+x * +y}`);
}

function division() {
    let x = prompt(`Введите первое число:`);
    let y = prompt(`Введите второе число:`);
    alert(`Результат деления: ${x} / ${y} = ${+x / +y}`);

}
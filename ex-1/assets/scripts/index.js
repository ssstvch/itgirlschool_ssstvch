'use strict';

function sumInput() {
    let divNumbers = document.createElement('div');
    divNumbers.className = "array";
    document.body.append(divNumbers);

    let divSum = document.createElement('div');
    divSum.className = "array";
    document.body.append(divSum);

    let numbers = [];

    for(;;) {
        let value = prompt("Введите значение:", "");
        console.log(value);
        console.log(typeof(value));
        if ((isNaN(value)) || (value === "") || (value === null) || (!value.trim().length) ) {
            console.log(`Введено не число. Ввод данный завершён`);
            break;
        } else {
            numbers.push(+value);
        }
    }

    divNumbers.innerHTML = `Введённый массив данных: ${numbers}`;
    console.log(numbers);

    let sum = 0;
    for(let num of numbers) {
        console.log(sum += num);
    }

    divSum.innerHTML = `Сумма всех элементов массива равна ${sum}.`;
}

sumInput();


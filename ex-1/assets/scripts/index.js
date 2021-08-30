'use strict';

function sumInput() {
    // создание div'а для массива
    let divNumbers = document.createElement('div');
    divNumbers.className = "array";
    document.body.append(divNumbers);

    // создание div'а для суммы всех значений массива
    let divSum = document.createElement('div');
    divSum.className = "array";
    document.body.append(divSum);

    // создание массива
    let numbers = [];

    // создаём переменную для суммы всех значений массива
    let sum = 0;

    // создание цикла для введения пользователем значений
    for(;;) {
        let value = prompt("Введите значение:", "");
        // проверка значения (не число, пустая строка, отмена или пробелы - завершение цикла)
        // если введено число - добавляется в массив
        if ((isNaN(value)) || (value === "") || (value === null) || (!value.trim().length) ) {
            console.log(`Введено не число. Ввод данный завершён`);
            break;
        } else {
            numbers.push(+value);
            sum += +value;
        }
    }

    let sort = numbers.sort((a, b) => { return a - b })

    // массив выводится на страницу
    divNumbers.innerHTML = `Введённый массив данных: ${sort}`;
    console.log(numbers);

    // сумма всех значений массива выводится на страницу
    divSum.innerHTML = `Сумма всех элементов массива равна ${sum}.`;
}

// вызов функции
sumInput();


'use strict';

let main = document.getElementsByTagName("main");
let divRandom = document.createElement("div");
let divMin = document.createElement("div");
let divMax = document.createElement("div");
let divAverage = document.createElement("div");
let divSum = document.createElement("div");
let divMult = document.createElement("div");

divRandom.classList.add("numbers");
divMin.classList.add("numbers");
divMax.classList.add("numbers");
divAverage.classList.add("numbers");
divSum.classList.add("numbers");
divMult.classList.add("numbers");

main[0].append(divRandom);
main[0].append(divMin);
main[0].append(divMax);
main[0].append(divAverage);
main[0].append(divSum);
main[0].append(divMult);




function clickMe() {
    let btn = document.getElementsByClassName("div_btn");
    btn[0].classList.add("btn_click");

    let numbers = [];

    for(let i = 0; i <= 9; i++) {
        numbers[i] = Math.round(-(Math.random() *20) + 10);
    }
    divRandom.textContent = `Сгенерировали: ${numbers}`;

    let minNum;
    for(let i = 0; i <= 9; i++) {
        if (i == 0) {
            minNum = numbers[i];
        } else if(minNum >= numbers[i]) {
            minNum = numbers[i];
        } 
    }
    divMin.textContent = `Наименьшее число ${minNum}`;

    let maxNum;
    for(let i = 0; i <= 9; i++) {
        if (i == 0) {
            maxNum = numbers[i];
        } else if (maxNum <= numbers[i]) {
            maxNum = numbers[i]
        }
    }
    divMax.textContent = `Наибольшее число: ${maxNum}`;


    let sum = 0;
    for(let num of numbers) {
        sum += num;
    }

    let averageNum = sum / numbers.length;

    divAverage.textContent = `Среднее арифметическое: ${averageNum}`;
    divSum.textContent = `Сумма чисел: ${sum}`;

    let mult = 0;
    for(let i = 0; i <= 9; i++) {
        if (i == 0) {
            mult = numbers[i];
        } else mult = mult * numbers[i]    
    }
    divSum.textContent = `Произведение чисел: ${mult}`;



    setTimeout(() => btn[0].classList.remove("btn_click"), 500);
}
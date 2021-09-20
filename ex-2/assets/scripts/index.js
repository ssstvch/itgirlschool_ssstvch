'use strict';

let checkboxes = document.getElementsByClassName("checkbox"); 

for (let checkbox of checkboxes) {
    checkbox.indeterminate = true;
};

let radioBoxes = document.getElementsByClassName("radio");

for (let radio of radioBoxes) {
    radio.indeterminate = true;
}

let getCatName = document.querySelector(".catName"),
    getUserName = document.querySelector(".name"),
    getEmail = document.querySelector(".email"),
    getBreed = document.querySelector("#breed"),
    getFood = document.querySelectorAll(".checkbox"),
    getSex = document.querySelectorAll(".radio"),
    getBtn = document.querySelector(".button");

getBtn.addEventListener('click', () => {
    // Убираем стандартное действие по клику
    event.preventDefault();

    createNewCat();
})

class Cat {
    constructor(catName, userName, email, breed, food, sex) {
        this.catName = catName;
        this.userName = userName;
        this.email = email;
        this.breed = breed;
        this.food = food;
        this.sex = sex;
    }
}

const createNewCat = () => {
    // Получаем имя питомца
    let catName = getCatName.value;

    // Получаем имя пользователя
    let userName = getUserName.value;

    // Получаем почту пользователя
    let email = getEmail.value;

    // Получаем породу питомца
    let breed;
    switch(typeof getBreed.value === String) {
        case getBreed.value === "scottish":
            breed = "Шотландская";
        case getBreed.value === "british":
            breed = "Британская";
        case getBreed.value === "maine-coon":
            breed = "Мейн-кун";
        case getBreed.value === "bengali":
            breed = "Бенгальская";
        case getBreed.value === "canadian":
            breed = "Канадский сфинкс";
        case getBreed.value === "don":
            breed = "Донской сфинкс";
        case getBreed.value === "abyssinian":
            breed = "Абиссинская";
        case getBreed.value === "siberian":
            breed = "Сибирская";
        case getBreed.value === "neva":
            breed = "Невская маскарадная";
        case getBreed.value === "persian":
            breed = "Персидская";
    }

    // Получаем вид кормов
    let food = [];
    for (let f of getFood) {
        if (f.checked === true) {
            food.push(f.parentElement.childNodes[2].innerHTML);
        } 
    }

    // Получаем пол питомца
    let sex;
    for (let s of getSex) {
        switch(s.checked === true) {
            case s.id === "male": 
                sex = "Самец";
            case s.id === "female":
                sex = "Самка";
        }
    }

    let cat = new Cat (catName, userName, email, breed, food, sex);
    console.log(cat);
}




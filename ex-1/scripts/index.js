"use strict"

let body = document.querySelector("body"),
    form = document.querySelector(".form"),
    firstname = document.querySelector(".form_name_input"),
    surname = document.querySelector(".form_surname_input"),
    rate = document.querySelector(".form_rate_input"),
    days = document.querySelector(".form_days_input"),
    formInput = document.querySelectorAll("input"),
    btn = document.querySelector(".form_btn");


btn.addEventListener('click', () => {
    event.preventDefault();

    console.log(firstname);
    console.log(surname);
    console.log(rate);
    console.log(days);


    removeErrors();

    checkFieldsFull();

    addWorkerSalary();

})

const checkFieldsFull = () => {
    for (let i = 0; i < formInput.length; i++) {
        if (!formInput[i].value) {
            console.log(`Поле не заполнено`);
            let error = document.createElement("div");
            error.classList.add("error");
            error.style.color = "red";
            error.innerHTML = `Заполните поле`;
            if(formInput[i].style.display === "none") {
                continue;
            }
            formInput[i].parentElement.append(error);
        } 
    } 
}

const removeErrors = () => {
    let errors = form.querySelectorAll(".error");

    for (let i= 0; i < errors.length; i++) {
        errors[i].remove();
    }
}

const addWorkerSalary = () => {
    let worker = new Worker (firstname.value, surname.value, rate.value, days.value);

    let div = document.createElement("div"),
        text = document.createElement("div");

    div.className = "form_div";
    text.className = "form_div_text";

    body.append(div);
    div.append(text);

    text.innerHTML = `
        Работник: ${worker.surname} ${worker.name} <br>
        Заработная плата: ${worker.getSalary()}
        
    `;
}

class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days
    }
}
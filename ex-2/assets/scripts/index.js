'use strict';


let form = document.querySelector(".form");
let name = form.querySelector(".name");
let email = form.querySelector(".email");
let username = form.querySelector(".username");
let password = form.querySelector(".password");
let passwordConfirm = form.querySelector(".passwordConfirm");
let label = form.querySelectorAll(".form_label");

let formBtn = form.querySelector(".form_btn");
let formInput = form.querySelectorAll(".form_inputText");


form.addEventListener('submit', function(event) {
    event.preventDefault();

    removeErrors();

    checkFieldsFull();

    clearInput();

    alert(`You have successfully registered`);
    
})


email.oninput = () => {
    let div = document.createElement("div");
    div.className = "msgEmail";
    email.parentElement.parentElement.insertBefore(div, email.parentElement);

    let msgEmail = document.querySelector(".msgEmail");

    if (email.value.match(/^[^@]+@[^@.]+\.[^@]+$/)) {
        msgEmail.style.color = "green";
        msgEmail.innerHTML = `✅ Корректный email`;
    } else {
        msgEmail.style.color = "red";
        msgEmail.innerHTML = `❌ Неверный формат email`;
    }
}

passwordConfirm.oninput = () => {
    let div = document.createElement("div");
    div.className = "msgPas";
    password.parentElement.parentElement.insertBefore(div, password.parentElement);

    let msgPas = document.querySelector(".msgPas");
    
    if (password.value !== passwordConfirm.value) {
        msgPas.style.color = "red";
        msgPas.innerHTML = `❌ Пароли не совпадают`;
    } else {
        msgPas.style.color = "green";
        msgPas.innerHTML = `✅ Пароли введены верно`;
    }
}

const checkFieldsFull = () => {
    for (let i = 0; i < formInput.length; i++) {
        if (!formInput[i].value) {
            console.log(`Поле не заполнено`);
            let error = document.createElement("div");
            error.classList.add("error");
            error.style.color = "red";
            error.innerHTML = `Заполните поле`;
            console.log(label[i])
            label[i].appendChild(error);
        }
    }
}

const removeErrors = () => {
    let errors = form.querySelectorAll(".error");
    let msgPas = document.querySelector(".msgPas");
    let msgEmail = document.querySelector(".msgEmail");

    msgPas.remove();
    msgEmail.remove();

    for (let i= 0; i < errors.length; i++) {
        errors[i].remove();
    }
}

const clearInput = () => {
    for (let i = 0; i < formInput.length; i++) {
        formInput[i].value = ``;
    }
}


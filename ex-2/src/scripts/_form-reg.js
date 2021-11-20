const check_fields_full = () => {

    let form_input = document.querySelectorAll(`.field-entry__input-text`),
        label = document.querySelectorAll(`.field-entry__label`),
        errors_count = 0;

    for (let i = 0; i < form_input.length; i++) {
        if (!form_input[i].value) {
            console.log(`Поле не заполнено`);

            let error = document.createElement(`div`);
            error.classList.add(`error`);
            error.style.color = `red`;
            error.innerHTML = `Заполните поле`;

            label[i].appendChild(error);
            errors_count++
        }
    }

    if(errors_count === 0) {
        alert(`
            Succesful registration!
        `);
    } else errors_count = 0
}

const remove_errors = () => {
    let errors = document.querySelectorAll(`.error`),
        msg_pas = document.querySelector(`.msg-pas`),
        msg_email = document.querySelector(`.msg-email`);

    if(msg_pas != null) msg_pas.remove();
    if(msg_email != null) msg_email.remove();

    if(errors.length != 0) {for (let i = 0; i < errors.length; i++) {
        errors[i].remove();
        }
    }
}

const clear_input = () => {

    let form_input = document.querySelectorAll(`.field-entry__input-text`);

    for (let i = 0; i < form_input.length; i++) {
        form_input[i].value = ``;
    }

}

const check_email = (email) => {

    let msg_email = document.querySelector(`.msg-email`);

    if (email.value.match(/^[^@]+@[^@.]+\.[^@]+$/)) {
        msg_email.style.color = `green`;
        msg_email.innerHTML = `✅ Корректный email`;
    } else {
        msg_email.style.color = `red`;
        msg_email.innerHTML = `❌ Неверный формат email`;
    }

}

const check_password = (password, password_confirm) => {

    let msg_pas = document.querySelector(`.msg-pas`);


    if (password.value !== password_confirm.value) {
        msg_pas.style.color = `red`;
        msg_pas.innerHTML = `❌ Пароли не совпадают`;
    } else {
        msg_pas.style.color = `green`;
        msg_pas.innerHTML = `✅ Пароли введены верно`;
    }

}

const send_form_data = () => {

    let user = {
        "name": document.querySelector(`.name`).value,
        "email": document.querySelector(`.email`).value,
        "username": document.querySelector(`.username`).value,
        "password": document.querySelector(`.password`).value,
    }

    fetch("https://httpbin.org/post", {
        method: `POST`,
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .then(user_data => {
            console.log(user_data.json);
        })
        .catch(error => console.log(error));
}

document.querySelector(`.email`).oninput = () => {

    if(document.querySelector(`.msg-email`) != null) {
        document.querySelector(`.msg-email`).remove();
    }

    let div = document.createElement(`div`),
        email = document.querySelector(`.email`);

        div.className = `msg-email`;
        email.parentElement.parentElement.insertBefore(div, email.parentElement);

        check_email(email)
}

document.querySelector(`.password-confirm`).oninput = () => {

    if(document.querySelector(`.msg-pas`) != null) {
        document.querySelector(`.msg-pas`).remove();
    }


    let div = document.createElement(`div`),
        password = document.querySelector(`.password`),
        password_confirm = document.querySelector(`.password-confirm`);

    div.className = `msg-pas`;
    password.parentElement.parentElement.insertBefore(div, password.parentElement);

    check_password(password, password_confirm);
    
}

document.querySelector(`.form__button`).addEventListener(`click`, (event) => {

    event.preventDefault();
    remove_errors(); 
    check_fields_full();
    send_form_data();
    clear_input();

})


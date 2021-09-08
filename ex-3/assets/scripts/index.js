'use strict';

let form = document.querySelector(".form"),
    username = form.querySelector(".form_div_input_name"),
    img = form.querySelector(".form_div_input_img"),
    theme = form.querySelector(".form_div_input_theme"),
    text = form.querySelector(".form_div_input_text"),

    formInput = form.querySelectorAll(".form_div_input"),
    btn = form.querySelector(".form_div_btn"),

    formComment = document.createElement('div'),
    userBox = document.createElement('div'),
    imgDiv = document.createElement('div'),
    userImage = document.createElement("img"),
    nameComment = document.createElement('div'),
    divBtn = document.createElement("div"),
    checkBtn = document.createElement("input"),
    labelCheckBtn = document.createElement("label"),
    commentBox = document.createElement('div'),
    themeComment = document.createElement('div'),
    textComment = document.createElement('div'),

    inputs = [];

    formComment.className = "form_comment";

    userBox.className = "form_comment_userBox";
    imgDiv.className = "form_comment_userBox_imgDiv";
    userImage.className = "form_comment_userBox_imgDiv_img";
    nameComment.className = "form_comment_userBox_name";
    divBtn.className = "form_comment_userBox_divBtn";
    checkBtn.className = "form_comment_userBox_divBtn_inputBox";
    labelCheckBtn.className = "form_comment_userBox_divBtn_btn";
    

    commentBox.className = "form_comment_commentBox";
    themeComment.className = "form_comment_commentBox_theme";
    textComment.className = "form_comment_commentBox_text";

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.length != 0) {
        getUserNameStorage();

        username.style.display = "none";
        img.style.display = "none";

        userBox.parentElement.insertBefore(divBtn, username);

        checkBtn.type = "checkbox";
        checkBtn.name = "checkbox";
        checkBtn.id = "checkbox";
        divBtn.appendChild(checkBtn);

        labelCheckBtn.innerHTML = "Change user";
        labelCheckBtn.for = "name";
        labelCheckBtn.type = "button";
        divBtn.appendChild(labelCheckBtn);

        labelCheckBtn.addEventListener('click', () => {
            if (checkBtn.checked === false) {
                username.style.display = "block";
                img.style.display = "block";
                username.style.marginTop = "20px";
                checkBtn.checked = true;
            } else if (checkBtn.checked === true) {
                username.style.display = "none";
                img.style.display = "none";
                username.style.marginTop = "20px";
                checkBtn.checked = false;
            }
        })
        
    } 
})

img.addEventListener('change', () => {
    let reader = new FileReader();
    let files = img.files[0];

    if(files.type !== "image/png" && files.type !== "image/jpg" && files.type !== "image/jpeg") {
        let error = document.createElement("div");
        error.classList.add("error");
        error.style.color = "red";
        error.innerHTML = `Неверный формат файла`;
        img.parentElement.prepend(error);

    } else {
        img.parentElement.firstChild.remove();
        reader.readAsDataURL(files);
        reader.onload = () => {
        userImage.src = reader.result;
        }
    }

})

form.addEventListener('submit', (event) => {

    event.preventDefault();

    removeErrors();

    checkFieldsFull()

    checkComment();

    if (!document.querySelector(".error")) {
        addComment();
        addDataToStorage();
    }
})

const removeErrors = () => {
    let errors = form.querySelectorAll(".error");

    for (let i= 0; i < errors.length; i++) {
        errors[i].remove();
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
            if(formInput[i].style.display === "none") {
                continue;
            }
            formInput[i].parentElement.prepend(error);
        } 
    } 
}

const checkComment = () => {
    inputs = [];
    for (let i = 0; i < formInput.length; i++) {
        inputs.push(formInput[i].value.replace(/(xxx)|(ххх)|(viagra)/gmi, "***"));
    }

}

const addComment = () => {

    document.body.append(formComment);

    formComment.appendChild(userBox);
    userBox.appendChild(imgDiv);
    if (imgDiv.firstChild) {
        imgDiv.firstChild.remove();
    }
    imgDiv.appendChild(userImage);

    userBox.appendChild(nameComment);
    nameComment.innerHTML = `<b>User:</b> ${inputs[0]}`

    formComment.appendChild(commentBox);

    commentBox.appendChild(themeComment)
    themeComment.innerHTML = `<b>Theme:</b><p>${inputs[2]}</p>`

    commentBox.appendChild(textComment);
    textComment.innerHTML = `<b>Comment:</b><p>${inputs[3]}</p>`
} 

const addDataToStorage = () => {
    if(localStorage.length === 0) {
        localStorage.setItem('username', inputs[0]);
        localStorage.setItem('photo', userImage.src);
    } else {
        localStorage.clear();
        localStorage.setItem('username', inputs[0]);
        localStorage.setItem('photo', userImage.src);
        }
}

const getUserNameStorage = () => {

    username.value = localStorage.getItem('username');

    let div = username.parentElement;

    div.prepend(userBox);
    userBox.appendChild(imgDiv);
    imgDiv.appendChild(userImage);
    userImage.src = localStorage.getItem('photo');

    userBox.appendChild(nameComment);
    nameComment.innerHTML = `<b>User:</b> ${localStorage.getItem('username')}`;
}


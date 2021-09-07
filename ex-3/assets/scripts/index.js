'use strict';

let form = document.querySelector(".form"),
    username = form.querySelector(".name"),
    img = form.querySelector(".form_img"),
    theme = form.querySelector(".theme"),
    text = form.querySelector(".form_text"),

    formInput = form.querySelectorAll(".form_input"),
    btn = form.querySelector(".form_btn"),

    formComment = document.createElement('div'),
    userBox = document.createElement('div'),
    nameComment = document.createElement('div'),
    commentBox = document.createElement('div'),
    themeComment = document.createElement('div'),
    textComment = document.createElement('div'),
    imgDiv = document.createElement('div'),
    userImage = document.createElement("img"),
    inputs = [],
    image = new Image();

formComment.className = "formComment";
userBox.className = "userBox"
nameComment.className = "form_name";
commentBox.className = "commentBox";
themeComment.className = "form_theme";
textComment.className = "form_text";
imgDiv.className = "form_imgDiv";
image.className = "form_imgDiv_img";

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.length != 0) {
        username.value = localStorage.getItem('username');
        img.src = localStorage.getItem('photo');
    }
})

img.addEventListener('change', () => {
    let reader = new FileReader();
    let files = img.files[0];
    
    console.log(files.type !== "image/png" && files.type !== "image/jpg" && files.type !== "image/jpeg");

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
            image.src = reader.result;
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
            console.log(formInput[i]);
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

        addStyles();

        document.body.append(formComment);

        formComment.appendChild(userBox);
        userBox.appendChild(imgDiv);
        imgDiv.appendChild(image);

        userBox.appendChild(nameComment);
        nameComment.innerHTML = `<b>User:</b> ${inputs[0]}`

        formComment.appendChild(commentBox);

        commentBox.appendChild(themeComment)
        themeComment.innerHTML = `<b>Theme:</b><p>${inputs[2]}</p>`

        commentBox.appendChild(textComment);
        textComment.innerHTML = `<b>Comment:</b><p>${inputs[3]}</p>`
} 

const addStyles = () => {
    formComment.style.border = "1px solid rgb(197, 197, 197)";
    formComment.style.borderRadius = "4px";
    formComment.style.margin = "2em auto";
    formComment.style.padding = "20px";
    formComment.style.width = "max-content";
    formComment.style.backgroundColor = "rgba(189, 154, 180, 0.295)";

    userBox.style.display = "flex";
    userBox.style.alignItems = "center";
    userBox.style.padding = "8px 12px";
    userBox.style.width = "max-content";
    userBox.style.margin = "0 0 0 10px";
    userBox.style.border = "1px solid rgba(197, 197, 197, 0.5)";
    userBox.style.borderRadius = "70px";

    imgDiv.style.width = "50px";
    imgDiv.style.float = "left";
    imgDiv.style.marginLeft = "10px";

    image.style.width = "100%";
    image.style.borderRadius = "15px 3px 3px 15px";

    nameComment.style.marginLeft = "10px";

    commentBox.style.margin = "0 auto";
    commentBox.style.padding = "0 30px";
    commentBox.style.margin = "0 auto";
    commentBox.style.width = "max-content";
    themeComment.style.margin = "10px auto";

    textComment.style.width = "500px";
    textComment.style.margin = "10px auto";
    textComment.style.hyphens = "auto";
    textComment.style.display = "table";

}

const addDataToStorage = () => {
    if(localStorage.length === 0) {
        let answer = confirm(`Would you like to save your username and photo?`);
        if (answer) {
            localStorage.setItem('username', inputs[0]);
            localStorage.setItem('photo', image.src);
        }
    } else {
        let answer2 = confirm(`Would you like to overwrite the username and photo`); 
        if (answer2) {
            localStorage.clear();
            localStorage.setItem('username', inputs[0]);
            localStorage.setItem('photo', image.src);
        }
    }
}
'use strict';

function checkSpam() {
    let name = document.getElementById('name').value;
    let theme = document.getElementById('theme').value;
    let text = document.getElementById('text').value;

    let formComment = document.createElement('div');
    let nameComment = document.createElement('div');
    let themeComment = document.createElement('div');
    let textComment = document.createElement('div');

    formComment.classList.add('form');
    nameComment.classList.add('form_name');
    themeComment.classList.add('form_theme');
    textComment.classList.add('form_text');

    name = name.match(/[А-Яа-я]{2,25}/gm)[0];

    let values = [name, theme, text];
    for (let value of values) {
        let check = value.replace(/(xxx)|(ххх)|(viagra)/gmi, "***");

        if(values[0] == value) {
            document.body.append(formComment);
            formComment.append(nameComment);
            nameComment.innerHTML = `<b>Имя пользователя:</b> ${check}`;
        } else if (values[1] == value) {
            formComment.append(themeComment);
            themeComment.innerHTML = `<b>Тема комментария:</b> ${check}`
        } else {
            formComment.append(textComment);
            textComment.innerHTML = `<b>Текст комментария:</b> ${check}`
        }
    };
}
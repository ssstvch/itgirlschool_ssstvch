'use strict';


function transformName() {
    let form = document.getElementById('form')
    let fullName = document.getElementById('fullName').value;
    let names = [];
    let cardName = document.createElement('div');
    let cardNameHeading = document.createElement('h2');
    let yourName = document.createElement('div');
    let secondName = document.createElement('div');
    let lastName = document.createElement('div');

    cardName.classList.add('form');
    cardNameHeading.classList.add('form_heading');
    yourName.classList.add('text_result');
    secondName.classList.add('text_result');
    lastName.classList.add('text_result');

    console.log(fullName);

    fullName = fullName.trim();

    names = fullName.match(/[А-Яа-я]{2,25}/gm);
    console.log(names)
    let str 

    for (let name of names) {
        console.log(name);
        str = name[0].toUpperCase() + name.slice(1).toLowerCase();
        if (name == names[0]) {
            form.after(cardName);
            cardName.append(cardNameHeading);
            cardNameHeading.innerHTML = "Your name is:";
            cardName.append(lastName);
            lastName.innerHTML = `Ваша Фамилия: <input class="text_input" type="text" value="${str}">`;
        } else if (name == names[1]) {
            cardName.append(yourName);
            yourName.innerHTML = `Ваше Имя: <input class="text_input" type="text" value="${str}">`;
        } else if (name == names[2]) {
            cardName.append(secondName);
            secondName.innerHTML = `Ваше Отчество: <input class="text_input" type="text" value="${str}">`;
        }
    }
}






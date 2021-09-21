"use strict";

let btn = document.querySelector('.form_btn');

btn.addEventListener('click', () => {
    // Убираем стандартное действие по клику
    event.preventDefault();

    let email = document.querySelector('#email').value,
    domain = document.querySelector('#domain').value,
    date = document.querySelector('#date').value,
    phone = document.querySelector('#phone').value;

    let validator = new Validator();
    console.log(validator.isEmail(email));
    console.log(validator.isDomain(domain));
    console.log(validator.isDate(date));
    console.log(validator.isPhone(phone));

    console.log(ValidatorStatic.isEmail(email));
    console.log(ValidatorStatic.isDomain(domain));
    console.log(ValidatorStatic.isDate(date));
    console.log(ValidatorStatic.isPhone(phone));

});

class Validator {
    isEmail(str) {
        if (str.match(/^[^@]+@[^@.]+\.[^@]+$/)) {
            return true
        } else return false
    }

    isDomain(str) {
        if (str.match(/[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi)) {
            return true
        } else return false
    }

    isDate(str) {
        if (str.match(/^(0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2}$/)) {
            return true
        } else return false
    }

    isPhone(str) {
        if (str.match(/^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/)) {
            return true
        } else return false
    }
}

class ValidatorStatic {
    static isEmail(str) {
        if (str.match(/^[^@]+@[^@.]+\.[^@]+$/)) {
            return true
        } else return false
    }

    static isDomain(str) {
        if (str.match(/[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi)) {
            return true
        } else return false
    }

    static isDate(str) {
        if (str.match(/^(0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2}$/)) {
            return true
        } else return false
    }

    static isPhone(str) {
        if (str.match(/^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/)) {
            return true
        } else return false
    }
}
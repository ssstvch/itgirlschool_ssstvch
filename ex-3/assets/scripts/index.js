'use strict';

let nowDate = new Date;

function formatDate(date) {
    let nowDate = new Date;

    if ((nowDate - date) <= 1) {
        console.log(`Прямо сейчас!`);
    } else if ((nowDate - date) / 1000 <= 59) {
        console.log(`${(nowDate - date) / 1000} секунд назад!`);
    } else if ((nowDate - date) / 60 / 1000 <= 59) {
        console.log(`${Math.round((nowDate - date) / 60 / 1000)} минут назад!`);
    } else {
        console.log(textDate(date));
    }
}

function textDate(date) {
    let day = date.getDate();
    if (day <= 9) {
        day = '0' + day;
    } 

    let month = date.getMonth();
    if (month <= 9) {
        month = '0' + month;
    } 

    let year = date.getFullYear();
    if (year > 0) {
        year = String(year).slice(2);
    }

    let hour = String(+date.getHours());
    if (+hour <= 9) {
        hour = '0' + hour;
    }

    let minutes = String(+date.getMinutes());
    if (+minutes <= 9) {
        minutes = '0' + minutes;
    }

    return `Дата: ${day}.${month}.${year}, ${hour}:${minutes}.`
}



formatDate(new Date(new Date - 1));
formatDate(new Date(new Date - 30 * 1000));
formatDate(new Date(new Date - 5 * 60 * 1000)); 
formatDate(new Date(new Date - 86400 * 1000)); 
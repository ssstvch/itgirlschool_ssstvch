'use strict';

let nowDate = new Date;

function formatDate(date) {
    let nowDate = new Date;

    switch(true) {
        case (nowDate - date) <= 1:
            console.log(`Прямо сейчас!`);
            break;
        case ((nowDate - date) / 1000) <= 59:
            console.log(`${(nowDate - date) / 1000} секунд назад!`);
            break;
        case (((nowDate - date) / 60 / 1000) <= 59):
            console.log(`${(nowDate - date) / 60 / 1000} минут назад!`);
            break;
        case (((nowDate - date) / 60 / 1000) >= 60):
            console.log(textDate(date));
            break
    }
}

formatDate(new Date(new Date - 1));
formatDate(new Date(new Date - 30 * 1000));
formatDate(new Date(new Date - 5 * 60 * 1000)); 
formatDate(new Date(new Date - 86400 * 1000)); 

function textDate(date) {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let minutes = String(+date.getMinutes());
    let hour = String(+date.getHours());

    switch (true) {
        case day <= 9:
            day = '0' + day;
        case month <= 9:
            month = '0' + month;
        case year > 0:
            year = String(year).slice(2);
        case +minutes <= 9:
            minutes = '0' + minutes;
        case +hour <= 9:
            hour = '0' + hour;
            break
    }

    return `Дата: ${day}.${month}.${year}, ${minutes}:${hour}.`
}



'use strict';

let priceParameters = [];

let modelNone = document.getElementById('model-none');
let modelMazda =  document.getElementById('model-mazda');
let modelPeugeot =  document.getElementById('model-peugeot');
let modelHyundai =  document.getElementById('model-hyundai');
let modelKia =  document.getElementById('model-kia');
let modelToyota =  document.getElementById('model-toyota');        

function choiceBrand() {

    let brand = document.getElementById('brand').value;
    let msg = document.getElementById('msg_brand');

    msg.style.display = `none`;
    
    modelNone.style.display = "none";
    modelMazda.style.display = "none";
    modelPeugeot.style.display = "none";
    modelHyundai.style.display = "none";
    modelKia.style.display = "none";
    modelToyota.style.display = "none";

    console.log(brand)

    switch (+brand) {
        case 0:
            msg.style.display = `block`;
            modelNone.style.display = "block";
            priceParameters.length = 0;
            break;
        case 1: 
            modelMazda.style.display = "block";
            priceParameters[0] = +brand;
            break;
        case 2: 
            modelPeugeot.style.display = "block";
            priceParameters[0] = +brand;
            break;
        case 3: 
            modelHyundai.style.display = "block";
            priceParameters[0] = +brand;
            break;
        case 4: 
            modelKia.style.display = "block";
            priceParameters[0] = +brand;
            break;
        case 5:
            modelToyota.style.display = "block";
            priceParameters[0] = +brand;
            break;
    }

    console.log(priceParameters);
}

function choiceModel() {
    let msg = document.getElementById('msg_model');

    if (modelMazda.value == 0 && modelPeugeot.value == 0 &&modelHyundai.value == 0 && modelKia.value == 0 && modelToyota.value == 0) {
        msg.style.display = "block";
        priceParameters.length = 1;
    } else if (modelMazda.style.display == "block") {
        msg.style.display = "none";
        priceParameters[1] = +modelMazda.value;
    } else if (modelPeugeot.style.display == "block") {
        msg.style.display = "none";
        priceParameters[1] = +modelPeugeot.value;
    } else if (modelHyundai.style.display == "block"){
        msg.style.display = "none";
        priceParameters[1] = +modelHyundai.value;
    } else if (modelKia.style.display == "block") {
        msg.style.display = "none";
        priceParameters[1] = +modelKia.value;
    } else if (modelToyota.style.display == "block") {
        msg.style.display = "none";
        priceParameters[1] = +modelToyota.value;
    }
    console.log(priceParameters);
}


function choiceYear() {
    let year = document.getElementById('year').value;
    let msg = document.getElementById('msg_year');

    if (year == 0) {
        msg.style.display = "block";
        priceParameters.length = 2;
    } else {
        msg.style.display = "none";
        priceParameters[2] = +year;
    }

    console.log(priceParameters)
}

function choiceKPP() {
    let kpp = document.getElementById('kpp').value;
    let msg = document.getElementById('msg_kpp');

    if (kpp == 0) {
        msg.style.display = "block";
        priceParameters.length = 3;
    } else {
        msg.style.display = "none";
        priceParameters[3] = +kpp;
    }

    console.log(priceParameters)
}

function choiceEngine() {
    let engine = document.getElementById('engine').value;
    let msg = document.getElementById('msg_engine');

    if (engine == 0) {
        msg.style.display = "block";
        priceParameters.length = 4;
    } else {
        msg.style.display = "none";
        priceParameters[4] = +engine;
    }

    console.log(priceParameters)
}

function choiceWheel() {
    let wheel = document.getElementById('wheel').value;
    let msg = document.getElementById('msg_wheel');

    if (wheel == 0) {
        msg.style.display = "block";
        priceParameters.length = 5;
    } else {
        msg.style.display = "none";
        priceParameters[5] = +wheel;
    }

    console.log(priceParameters)
}

function powerValid() {
    let power = document.getElementById('power').value;
    let divPower = document.getElementById('msg_power_0');
    let powerMsg = document.getElementById('msg_power_1');
    let msgNotEntered = document.getElementById('msg_power_2');
    let msgIncorrected = document.getElementById('msg_power_3');

    if (/^([1-3][0-9][0-9])$/.exec(power)) {
        divPower.style.display = 'flex';
        msgNotEntered.style.display = 'none';
        msgIncorrected.style.display = 'none';
        powerMsg.innerHTML = power;
        priceParameters[6] = +power;
    } else if ((!power.trim().length) || (power === "") || (power === null)) {
        msgNotEntered.style.display = 'block';
        msgIncorrected.style.display = 'none';
        divPower.style.display = 'none';
    } else if (!(/^([1-3][0-9][0-9])$/.exec(power))) {
        msgIncorrected.style.display = 'block';
        divPower.style.display = 'none';
    } 
}

function choiceMileage() {
    let mileage = document.getElementById('mileage').value;
    let textMileage = document.getElementById('textMileage');
    let selMileage = document.getElementById('selMileage');

    textMileage.style.display = 'flex';
    selMileage.innerHTML = mileage;
    priceParameters[7] = +mileage;

    if (mileage === null) {
        console.log(`Не введён пробег`)
    }
}

function calc() {
    console.log(priceParameters);
    let sum = 0;
    for(let parameter of priceParameters) {
        if ((priceParameters.length != 8)) {
            alert(`Введены не все данные!`);
            break;
        } else if ((isNaN(parameter)) || (parameter === "") || (parameter === null)){
            alert(`Введены некорректные данные!`);
            break;
        } else {
            console.log(parameter)
            sum += parameter;
        }
    }
    alert(`Стоимость автомобиля: ${sum*1000} рублей.`);
}
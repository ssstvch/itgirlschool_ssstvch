'use strict';

// Функция смена фон при смене option
const bgChange = () =>  {
    let selBg = document.getElementById('bg');
    console.log(selBg.options[selBg.selectedIndex].text);
    let bg = selBg.options[selBg.selectedIndex].text;
    switch (bg) {
        case 'Голубой':
            document.body.style.backgroundColor = ('rgba(136, 178, 197, 0.24)');
            break;
        case 'Жёлтый':
            document.body.style.backgroundColor = ('rgba(233, 211, 88, 0.678)');
            break;
        case 'Зелёный':
            document.body.style.backgroundColor = ('rgba(118, 206, 100, 0.678)');
            break;
        case 'Фиолетовый':
            document.body.style.backgroundColor = ('rgba(167, 100, 206, 0.678)');
            break;
    } 
} 





// Получаем пароли с двух input-полей
const getPassword = () => {
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("conrifmPassword");
    return [password, confirmPassword];
}

// Проверяем , чтобы они были одинаковые
const verPassword = () => {
    getPassword();
    if (password.value !== confirmPassword.value) {
        return ""
    }
} 

// Получаем массив данных, введённых пользователем
const formData = () => {
    let formName = document.getElementById("name");
    let email = document.getElementById("email");
    let username = document.getElementById("username");
    let arrData = new Array(formName.value, email.value, username.value);
    return arrData;
}

// Функция для очистки полей формы после отправки (и чтобы не перезагружалась страница)
const resetForm = () => {
    let submit = document.addEventListener('submit', (e) => {
        e.preventDefault();
        e.target.reset();
    })
}

// Проверяем, чтобы все поля формы были заполнены
const verification = () => {
    let arr = formData();
    console.log(arr);
    switch (""){
        case arr[0]: {
            console.log(`Вы не ввели имя пользователя!`);
            resetForm();
            break;
        }
        case arr[1]: {
            console.log(`Вы не ввели email пользователя!`);
            resetForm();
            break;
        }
        case arr[2]: {
            console.log(`Вы не ввели никнейм пользователя!`);
            resetForm();
            break;
        }
        case verPassword(): {
            console.log(`Пароли не совпадают или не введены!`);
            resetForm();
            break;
        }
        default: {
            console.log(`Добро пожаловать, ${arr[0]}!`);
            alert(`Добро пожаловать, ${arr[0]}!`);
            resetForm();
        }
    }
}

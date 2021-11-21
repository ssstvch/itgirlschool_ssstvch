const giphy_api = {
    endpoint: `https://api.giphy.com/v1/gifs/search?`,
    key: `lQJ9BIU9QoeorJeS5Z9xEiyfLAmlGh5E`
}
const search_button = document.querySelector(`.form__btn`);

const visible_response = () => {
    document.querySelector(`.response`).style.display = `block`;
}

const unvisible_response = () => {
    document.querySelector(`.response`).style.display = `none`;
}

const add_response_title = () => {
    let response_title = document.querySelector(`.response__title`),
    request_text = document.querySelector(`.form__input`).value;

    response_title.innerHTML = `Ответ по запросу: ${request_text}`;
}

const add_image_src = (result, img) => {
    if(img.alt.split('№')[1] == 1) {
        img.src = `https://media1.giphy.com/media/${result.data[0].id}/giphy.gif`
    } else if (img.alt.split('№')[1] == 2) {
        img.src = `https://media1.giphy.com/media/${result.data[1].id}/giphy.gif`
    } else if (img.alt.split('№')[1] == 3) {
        img.src = `https://media1.giphy.com/media/${result.data[2].id}/giphy.gif`
    }
}

const add_error = () => {
    let text_error = document.createElement(`div`);
    text_error.className = `form__error`;
    try {
        if(request_text == `` && request_text == null && request_text == undefined) BAD_code()
    } catch {
        open_popup(`Ничего не найдено`, `Введите запрос`);
    }
    if(document.querySelector(`.form__error`) === null) {
        document.querySelector(`.form__input`).after(text_error);
        document.querySelector(`.form__error`).innerHTML = `Ничего не найдено, введите корректный запрос`;
    } 
}

const delete_error = () => {
    if(document.querySelector(`.form__error`) != null) {
        document.querySelector(`.form__error`).remove();
    }
}

const send_request_giphy = () => {
    get_answer_giphy()
}

const show_search_result = (result) => {

    add_response_title();
    visible_response();

    let images = document.querySelectorAll(`.image-container__image`);
    
    for(let img of images) {

        delete_error();

        if(result.data.length != 0) {
            add_image_src(result, img);
        } else {
            add_error();
            unvisible_response();
        }

    }
}

const open_popup = (tytle, text) => {

    document.querySelector(`.body__title`).innerHTML = tytle;
    document.querySelector(`.body__text`).innerHTML = text;

    document.querySelector(`.popup__body`).classList.add(`active`);
    document.querySelector(`.popup`).classList.add(`active`);

    document.querySelector(`.body__button`).addEventListener('click', (event) => {
        event.preventDefault();
        close_popup()
    })
}

const close_popup = () => {

    document.querySelector(`.popup__body`).classList.remove(`active`);
    document.querySelector(`.popup`).classList.remove(`active`);

}

async function get_answer_giphy() {

    let request_text = document.querySelector(`.form__input`).value;
   
    try {
        let get_result = await fetch(
            `${giphy_api.endpoint}api_key=${giphy_api.key}&q=${request_text}&limit=3&offset=0&lang=ru`
        )
        let result = await get_result.json();
        show_search_result(result);
    } catch (error) {
        open_popup(`Нет доступа к серверу`, `Повторите попытку позже`);
        console.log(`Нет доступа к серверу. Повторите позже. Подробнее:${error}`)
    }    
}


search_button.addEventListener('click', send_request_giphy)
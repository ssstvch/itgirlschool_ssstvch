const giphy_api = {
    endpoint: `https://api.giphy.com/v1/gifs/search?`,
    key: `lQJ9BIU9QoeorJeS5Z9xEiyfLAmlGh5E`
}
const search_button = document.querySelector(`.form__btn`);

const send_request_giphy = () => {
    get_answer_giphy()
}

const show_search_result = (result) => {

    let response = document.querySelector(`.response`),
        response_title = document.querySelector(`.response__title`),
        request_text = document.querySelector(`.form__input`).value,
        images = document.querySelectorAll(`.image-container__image`);


    response.style.display = `block`;

    response_title.innerHTML = `Ответ по запросу: ${request_text}`;
    
    for(let img of images) {
            if(img.alt.split('№')[1] == 1) {
                img.src = `https://media1.giphy.com/media/${result.data[0].id}/giphy.gif`
            } else if (img.alt.split('№')[1] == 2) {
                img.src = `https://media1.giphy.com/media/${result.data[1].id}/giphy.gif`
            } else if (img.alt.split('№')[1] == 3) {
                img.src = `https://media1.giphy.com/media/${result.data[2].id}/giphy.gif`
            }
    }
}

async function get_answer_giphy() {
    let request_text = document.querySelector(`.form__input`).value;
    const get_result = await fetch(
        `${giphy_api.endpoint}api_key=${giphy_api.key}&q=${request_text}&limit=3&offset=0&lang=ru`
    );

    const result = await get_result.json();
    console.log(result)

    show_search_result(result);
}


search_button.addEventListener('click', send_request_giphy)
const check_checkboxes = () => {
    let checkboxes = document.querySelectorAll(`.feed__diet_input`);
    for (let checkbox of checkboxes) {
        checkbox.indeterminate = true;
    };
}

const check_radio = () => {
    for (let radio of document.querySelectorAll(`.field__radio`)) {
        radio.indeterminate = true;
    }
    console.log(`radio`)
}

const send_form = () => {
    fetch("https://httpbin.org/post",
        {
            method: 'POST',
            body: new FormData(document.querySelector(`.form-cat`))
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.form);
        })
        .catch(error => console.log(error));

}

document.querySelector(`.form-cat__button`).addEventListener(`click`, (event) => {

    event.preventDefault();
    check_checkboxes();
    check_radio();

    send_form();
    
})
const switch_btn = document.querySelector(`.header__switch-btn`);

switch_btn.addEventListener('click', () => {
    console.log(switch_btn.classList.contains("header__switch-btn_on"))
    switch_btn.classList.toggle(`header__switch-btn_on`);
})

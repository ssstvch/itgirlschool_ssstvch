const svg_names = [`home`, `classes`, `documents`, `bookmarks`, `messages`, `settings`, `sign-out`];
const menu_a = document.querySelectorAll(`.menu__a`);

(function() {
    menu_a.forEach(a => {
    console.log(a.parentNode.previousElementSibling);

    switch (a.innerHTML) {
        case "Home": 
            a.parentNode.previousElementSibling.style.background = `no-repeat url("img/${svg_names[0]}.svg")`;
            break;
        case "Classes": 
            a.parentElement.previousElementSibling.style.background = `no-repeat url("img/${svg_names[1]}.svg")`;
            break;
        case "Documents":
            a.parentElement.previousElementSibling.style.background = `no-repeat url("img/${svg_names[2]}.svg")`;
            break;
        case "Bookmarks":
            a.parentElement.previousElementSibling.style.background = `no-repeat url("img/${svg_names[3]}.svg")`;
            break;
        case "Messages": 
            a.parentElement.previousElementSibling.style.background = ` no-repeat url("img/${svg_names[4]}.svg")`;
            break;
        case "Settings":
            a.parentElement.previousElementSibling.style.background = `no-repeat url("img/${svg_names[5]}.svg")`;
            break;
        case "Sign Out":
            a.parentElement.previousElementSibling.style.background = `no-repeat url("img/${svg_names[6]}.svg")`;
            break;
    }
    });
})()
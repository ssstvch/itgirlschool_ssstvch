'use strict';

function clickMe() {
    let carts = document.getElementsByClassName('cart');
    const nodesArray = Array.from(carts);
    nodesArray.forEach(( carts, function(el) {
        el.onclick = function(e) {
            el.style.background = "rgba(231, 119, 119, 0.425)";
            setTimeout(() => el.style.background = "", 2000);
        }
    })
)};

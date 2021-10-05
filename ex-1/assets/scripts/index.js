"use strict";

let gallery = document.querySelector(".gallery"),
    btn = document.querySelector(".btn"),
    heroName = document.querySelector(".gallery_info_name_text"),
    activity = document.querySelector(".gallery_info_activity_text"),
    alterego = document.querySelector(".gallery_info_alterego_text"),
    friends = document.querySelector(".gallery_info_friends_text"),
    image = document.querySelector(".gallery_image_img"),
    moreInfo = document.querySelector(".gallery_moreinfo_more_text"),
    nextBtn = document.querySelector(".gallery_btn_next");

const getHeroes = fetch("./assets/scripts/heroes.json")
    .then(response => response.json())
    .then(heroes => console.log(heroes));

btn.addEventListener('click', () => {
    console.log(response)
    if(gallery.style.display === "none") {
        gallery.style.display = "block";
        btn.style.display = "none";
        heroName.innerHTML = heroes[hero].name;
        activity.innerHTML = heroes[hero].activity;
        alterego.innerHTML = heroes[hero].alterego;
        friends.innerHTML = heroes[hero].friends;
        image.src = heroes[hero].image;
        moreInfo.innerHTML = heroes[hero].more;
}});

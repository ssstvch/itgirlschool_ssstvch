"use strict";

let gallery = document.querySelector(".gallery"),
    btn = document.querySelector(".btn"),
    heading = document.querySelector(".heading"),
    heroName = document.querySelector(".gallery_info_name"),
    activity = document.querySelector(".gallery_info_activity_text"),
    alterego = document.querySelector(".gallery_info_alterego_text"),
    friends = document.querySelector(".gallery_info_friends_text"),
    image = document.querySelector(".gallery_image_img"),
    moreInfo = document.querySelector(".gallery_moreinfo_text"),
    rate = document.querySelector(".rate"),
    next = document.querySelector(".rate_btn"),
    radioBoxes = document.querySelectorAll("input"),
    yourResult = document.querySelector(".yourRating"),
    rateItems = document.querySelectorAll(".yourRating_ul_li"),
    rating = [];

const getStatus = (response) => {
    if (!response.ok) {
        return Promise.reject(new Error(response.statusText))
    }
    return Promise.resolve(response);
}

const json = (response) => response.json()

const addGallery = (heroes) => {
    console.log('data', heroes);

    btn.addEventListener('click', () => {
        event.preventDefault();
        console.log(`add first hero`);
        btn.style.display = "none";
        gallery.style.display = "grid";
        rate.style.display = "block";
        addHeroInfo(heroes, 1);
        console.log(heroName.id);
        localStorage.clear();
    });

    next.addEventListener('click', () => {
        event.preventDefault();
        console.log(`click`);
        console.log(heroName.id); 
        console.log(heroes);

        if (+heroName.id === 1) {
            addHeroInfo(heroes, 2);
        } else if (+heroName.id === 2) {
            addHeroInfo(heroes, 3);
        } else if (+heroName.id === 3) {
            addHeroInfo(heroes, 4);
        } else if (+heroName.id === 4) {
            addHeroInfo(heroes, 5);
        } else if (+heroName.id === 5) {
            addHeroInfo(heroes, 6);
        } else if (+heroName.id === 6) {
            addHeroInfo(heroes, 7);
        } else if (+heroName.id === 7) {
            addHeroInfo(heroes, 8);
        } else if (+heroName.id === 8) {
            addHeroInfo(heroes, 9);
        } else if (+heroName.id === 9) {
            addHeroInfo(heroes, 10);
            next.innerHTML = `Узнать результат`;
        } 

        addRating();

        if(rating.length === 10) {
            gallery.style.display = "none";
            rate.style.display = "none";
            yourResult.style.display = "block";
            console.log(rating);
            let index = 0,
                hero = 1,
                top = 1;

            for (let r of rating) {
                rateItems[index].innerHTML = `${top} место: ${heroes[hero].name}`;
                index++;
                hero++;
                top++
            }
        }
    });
}
    

const addRating = () => {
    for(let r of radioBoxes) {
        if(r.checked === true) {
            r.checked = false;
            rating.push(+r.id.slice(2));
            localStorage.setItem('rating', JSON.stringify(rating));
            rating = JSON.parse(localStorage.getItem('rating'));
            if (rating.length === 10) {

                rating.forEach(
                    (el, i) => {
                        rating[i] = [el, i];
                    } 
                )

                rating.sort(
                    (num1, num2) => {
                        if (num1[0] < num2[0]) return 1;
                        if (num1[0] == num2[0]) return 2;
                        if (num1[0] < num2[0]) return 3;
                    }
                )

                return true
            }

        }
    }
};


const addHeroInfo = (obj, prop) => {
    heroName.innerHTML = obj[prop].name;
    heroName.id = obj[prop].number;
    activity.innerHTML = obj[prop].activity;
    alterego.innerHTML = obj[prop].alterego;
    friends.innerHTML = obj[prop].friends;
    moreInfo.innerHTML = obj[prop].more;

    image.src = obj[prop].image;
}

const addRatingInDom = () => {
    gallery.style.display = "none";
    rate.style.display = "none";
    heading.style.display = "none";
}

fetch('./assets/scripts/heroes.json')
.then(getStatus)
.then(json)
.then(addGallery)
.catch((error) => {
    console.log('error', error);
});
'use strict'

let breeds,
    catCard = document.querySelector(".cat_card"),
    getBreed = document.querySelector("#breed"),
    image = document.querySelector(".cat_card_photo_img"),
    catName = document.querySelector(".cat_card_name"),
    desc = document.querySelector("#desc"),
    temp = document.querySelector("#temp"),
    origin = document.querySelector("#origin"),
    weight = document.querySelector("#weight");

fetch('https://api.thecatapi.com/v1/breeds?attach_breed=0')
    .then(response => response.json())
    .then(data => {
        breeds = data;
        console.log(data);
        console.log(getBreed);
        getBreed.addEventListener('change', () => {
            for(let breed of breeds) {
                if(breed.id === getBreed.value) {
                    if(catCard.style.display === "") {
                        catCard.style.display = "block"
                    }
                    image.src = breed.image.url;
                    catName.innerHTML = breed.name;
                    desc.innerHTML = breed.description;
                    temp.innerHTML = breed.temperament;
                    origin.innerHTML = breed.origin;
                    weight.innerHTML = breed.weight.metric;
                }
            }
        })
    });


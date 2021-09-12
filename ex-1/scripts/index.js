"use strict"

const person = {
    name: "Valera",
    age: 23,
}


let city = person.city;
city = "Amsterdam";
person.city = "Saint-Petersburg"

console.log(person)
console.log(city)
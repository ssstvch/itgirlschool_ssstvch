'use strict';

let placeholderTextes = ["Сегодня был отличный день", "Дорогой дневник", "Угадайте что случилось", "Не забыть сходить в магазин", "Пора запланировать отдых", "Снова о ремонте", "Прекрасное утро, впереди меня ждёт", "Сегодня я как всегда молодец"];

let note = document.querySelector(".scn_flex_form_inputNote"),
    saveBtn = document.querySelector(".scn_flex_form_btn"),
    notebook = document.querySelector(".scn_flex_notes"),
    textDiv = document.querySelector(".scn_flex_notes_textDiv"),
    notes,
    nbk = [],
    firstArr,
    nbkNote,
    counter = Number();


document.addEventListener('DOMContentLoaded', () => {
    
    randomPlaceholder();

    // Время сохранения заметки неверное, позже исправлю
    
    if(localStorage.getItem('myNotes') !== null) {
        notes = JSON.parse(localStorage.getItem('myNotes'));
        for (let n of notes) {
            console.log(n);
            addNote(n);
        }
        }
    }
)

saveBtn.addEventListener('click', () => {

    event.preventDefault();

    getNoteText();
})

const randomPlaceholder = () => {

    let length = placeholderTextes.length;
    console.log(length);
    let text = Math.floor(Math.random() * length);
    console.log(text);

    note.placeholder = `${placeholderTextes[text]}...`

}

const getNoteText = () => {

    let noteText = note.value;

    if (localStorage.getItem('myNotes') === null) {
        localStorage.setItem('myNotes', JSON.stringify([noteText]));
        notes = JSON.parse(localStorage.getItem('myNotes'));
    } else {
        notes = JSON.parse(localStorage.getItem('myNotes'));
        notes.push(noteText);
        localStorage.setItem('myNotes', JSON.stringify(notes));
        notes = JSON.parse(localStorage.getItem('myNotes'));
    }

    addNote(noteText);

    note.value = '';

}

const getDate = () => {
    let date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth(),
        day = date.getDate(),
        hour = date.getHours(),
        minutes = date.getMinutes();

    if (day < 10) day = `0${day}`;

    switch (month) {
        case 0:  month = "января"; break;
        case 1:  month = "февраля"; break;
        case 2:  month = "марта"; break;
        case 3:  month = "апреля"; break;
        case 4:  month = "мая"; break;
        case 5:  month = "июня"; break;
        case 6:  month = "июля"; break;
        case 7:  month = "августа"; break;
        case 8:  month = "сентября"; break;
        case 9:  month = "октября"; break;
        case 10:  month = "ноября"; break;
        case 11:  month = "декабря"; break;
    }

    return `Оставлена ${day} ${ month} ${year} года в ${hour}:${minutes}`;
}

const addNote = (addNoteText) => {
    let myNotebook = document.createElement("div");
        myNotebook.className = ".scn_flex_notes_textDiv_myNotebook";
        textDiv.append(myNotebook);

    let addNote = document.createElement("div");
        addNote.className = "scn_flex_notes_textDiv_myNotebook_addNote";
        myNotebook.append(addNote);
        

    let noteDate = document.createElement("div");
        noteDate.className = "scn_flex_notes_textDiv_myNotebook_addNote_noteDate";
        addNote.append(noteDate);

    let noteDelete = document.createElement("div");
        noteDelete.className = "scn_flex_notes_textDiv_myNotebook_addNote_delete";
        noteDelete.id = `${counter}`;
        // noteDelete.onclick = deleteNote();
        addNote.append(noteDelete);

        if (nbk.length === 0) {
            counter = 0;
            counter++
        } else counter++
        

    let addText = document.createElement("div");
        addText.className = "scn_flex_notes_textDiv_myNotebook_addNote_addText";
        addNote.appendChild(addText);

    let addNoteDate =  getDate(),
        addNoteDelete = `Удалить заметку`;

        noteDate.innerHTML = `<p>${addNoteDate}</p>`;
        noteDelete.innerHTML = `<p>${addNoteDelete}</p>`;
        addText.innerHTML = `<p>${addNoteText}</p>`;

        nbkNote = [addNoteDate, addNoteDelete, addNoteText];

    if (localStorage.getItem('myNotes') === null) {
        localStorage.setItem('myNotes', JSON.stringify(nbkNote));
        firstArr = JSON.parse(localStorage.getItem('myNotes'));
        nbk.push(firstArr);
        console.log(nbk);
    } else {
            nbk = JSON.parse(localStorage.getItem('myNotes'));
        if (nbk[1] === "Удалить заметку"){
            nbk = [firstArr, nbkNote];
            localStorage.setItem('myNotes', JSON.stringify(nbk));
        } else {
            console.log(nbk);
            localStorage.setItem('myNotes', JSON.stringify(nbk));
            nbk = JSON.parse(localStorage.getItem('myNotes'));
            console.log(nbk);
        }
    } 
}


// Доделаю позже

// const deleteNote = () => {
//     let deleteNote = document.querySelectorAll(".scn_flex_notes_textDiv_myNotebook_addNote_delete");
//     let idx;
//     deleteNote.forEach(del => del.addEventListener('click', (event) => {
//         event.preventDefault();
//         idx = del.id;
//         nbk.splice(idx, 1);
//         console.log(nbk);
//         return nbk
//     }))
    
// }
'use strict';

let checkboxes = document.getElementsByClassName("checkbox"); 

for (let checkbox of checkboxes) {
    checkbox.indeterminate = true;
};

let radioBoxes = document.getElementsByClassName("radio");

for (let radio of radioBoxes) {
    radioBoxes.indeterminate = true;
}




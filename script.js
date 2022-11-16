let raw = [];
let rawSearch = [];
let i = 0, j = 0;

function addWords() {
    raw[i] = document.getElementById("text").value;
    document.getElementById('textinput').innerHTML = "The word " + raw[i] + " has been added!";
    ++i;
}

function searchWords() {
    rawSearch[j] = document.getElementById("text").value;
    for (let x = 0; x < i; ++x) {
        if (raw[x] === rawSearch[j]) {
             document.getElementById('textinput').innerHTML = 'This word it is already in dictionary!';
        } else {
             document.getElementById('textinput').innerHTML = 'This word was not found in dictionary!';
        }
    }
}

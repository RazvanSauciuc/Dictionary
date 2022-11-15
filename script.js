let raw = [];
let i = 0;

function addWords() {
    raw[i] = document.getElementById("text").value;
    document.getElementById('textinput').innerHTML = "The word " + raw[i] + " has been added";
    for (let j = 0; j < i; ++j) {
        if (raw[i] === raw[j]) {
            document.getElementById('textinput').innerHTML = 'This word it is already in dictionary';
        }
    }
    ++i;
}


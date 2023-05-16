

var nicholeNumberLikes = 12;
var neilNumberLikes = 9;
var jimNumberLikes = 9;

// function counter() {
//     amountOfLikes += 1;
// }

var nicholeLikes = document.querySelector("#nicholeCard");

function changeLikes() {
    nicholeNumberLikes += 1;
    nicholeLikes.innerText = nicholeNumberLikes + " like(s)";
}

// counter();
// console.log(amountOfLikes);

var neilLikes = document.querySelector("#neilCard");

function changeNeilLikes() {
    neilNumberLikes += 1;
    neilLikes.innerText = neilNumberLikes + " like(s)";
}

var jimLikes = document.querySelector("#jimCard");

function changeJimLikes() {
    jimNumberLikes += 1;
    jimLikes.innerText = jimNumberLikes + " like(s)";
}


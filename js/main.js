const cardStamp = document.getElementById("card-output");

const overlayEl = document.getElementById("overlay");
const overlayBtn = document.getElementById("overlay-btn");
const overlayImg = document.getElementById("overlay-img");

const cardToGen = 6; 

const overlayHandler = () => {
    const allCards = document.querySelectorAll(".card");
    allCards.forEach((singleCard) => {
        const imagesEl = singleCard.children[1].firstElementChild;

        
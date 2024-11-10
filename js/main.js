// DOM Elements
const notesContainerEl = document.querySelector("#notesContainer");
const #ClosebtnEl = document.querySelector("#Closebtn");
const Imageover = document.querySelector("#Imageover");

const layoverEl = document.querySelector("#layover");

let imageData = [];

const loadImages = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=6");

        imageData = await response.json();
    }  catch (error) {
        console.error("Errore nel caricamento delle immagini", error);
    }
};

const renderContent = (items, targetElement) => {
    targetElement.innerHTML = items.reduce((html, item) => {
        return html + `


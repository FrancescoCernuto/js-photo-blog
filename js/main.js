const cardStamp = document.getElementById("card-output");

const overlayEl = document.getElementById("overlay");
const overlayBtn = document.getElementById("overlay-btn");
const overlayImg = document.getElementById("overlay-img");

const cardToGen = 6; 

const overlayHandler = () => {
    const allCards = document.querySelectorAll(".card");
    allCards.forEach((singleCard) => {
        const imagesEl = singleCard.children[1].firstElementChild;

        singleCard.addEventListener("click", () => {
            overlayEl.classList.remove("d-none");

            allCards.forEach((singleCard) => {  
                singleCard.classList.add("d-none");
            });   
            
overlayImg.innerHTML = `<img src="${imagesEl.src}" alt="img" />`;
 });

 overlayBtn.addEventListener("click", () => {
    overlayEl.classList.add("d-none");

    allCards.forEach((singleCard) => {
        singleCard.classList.remove("d-none");
    });
  });
});
};

const stampGeneratedImageCards = (numCardToGen, stampEl) => {
    fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${numCardToGen}`)
      .then((res) => res.json())
      .then((images) => {
        images.forEach((img) => {
            stampEl.innerHTML += `           
            <div class="col-12 col-md-6 col-xl-4">
              <div class="card">
                <img class="card-pin" src="./img/pin.svg" alt="pin" />
                <div class="card-body">
                  <img src="${img.url}" alt="img" />
                  <div class="pt-3 pb-1">${img.title}</div>
                </div>
              </div>
            </div>`;
        });

        overlayHandler();+

        stampGeneratedImageCards(cardToGen, cardStamp);
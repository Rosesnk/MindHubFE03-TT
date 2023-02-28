const cardContainer = document.getElementById('cardContainer');

let generatedCards = createCards(data.events);

cardContainer.innerHTML = generatedCards;

function createCards(cardsDate) {
    let cards = ''
    for (const card of cardsDate) {
        cards += `
        <div class="col cards"> 
            <a class="text-decoration-none text-reset"  href="./details.html">
                <div class="card" style = "width: 18rem; height: 450px;">
                        <img src="${card.image}" class="card-img-top" alt="..." style="width: 18rem; height: 200px;"> 
                        <div class="card-body h-auto d-inline-block" ><h5 class="card-title">${card.name}</h5 >
                            <p class="card-text">${card.description}</p>
                                <div class=" card-price-ver-mas row  text-center justify-content-evenly">
                                    <p class="precio col-5">Price: $${card.price}</p>
                                    <button type="button" class="btn col-5 btn-outline-primary btn-sm position-absolute  bottom-0 m-2" style="--bs-btn-padding-y: .15rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">Ver más</button>
                                </div>                        
                        </div >
                    </div >
                </a >
            </div > `;
    }
    return cards




}
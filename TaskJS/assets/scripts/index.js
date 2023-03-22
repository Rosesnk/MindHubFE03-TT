// const cardContainer = document.getElementById('cardContainer');
// let generatedCards = createCards(data.events);

function generatedCards(cardsDate){
    let cards = "";
    for (const card of cardsDate) {
            cards += createCards(card);
    }
    return cards
}

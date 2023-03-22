function generatedCards(cardsDate) {
  let cards = "";
  for (const card of cardsDate) {
    if (Date.parse(card.date) < Date.parse(datosApi.currentDate)) {
      cards += createCards(card);
    }
  }
  return cards;
}


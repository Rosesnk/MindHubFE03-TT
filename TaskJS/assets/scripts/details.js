const params = new URLSearchParams(document.location.search);

const id = params.get("id");

const card = data.events.filter((events) => events._id == id);

const details = document.getElementById("cardDetail");

details.innerHTML = createCard(card[0]);

function createCard(card) {
  return `<div id="event" class="card d-flex justify-content-center" >
<img src="${card.image}" class="imgDetail" alt="Images">
<div class="card-body">
    <h5 class="card-title-detail">${card.name}</h5>
    <P>Date: ${card.date}</p>
    <div class="card-bottom d-flex flex-column justify-content-between">
        <p class="card-text-detail">Description: ${card.description}</p>
        <div class="d-flex flex-row justify-content-around" >
            <p class="card-text-detail">Category: ${card.category}</p>
            <p class="card-text-detail">Capacity: ${card.capacity}</p>
            <p class="card-text-detail">Assistance: ${card.assistance} </p>
            <p>Price: $ ${card.price}</P>
        </div>
        <div class="d-flex flex-row justify-content-end" >
        <a href="./index.html" class="btn btn-primary">Home</a>
        </div>
    </div>
    
    
</div>
</div>`;
}

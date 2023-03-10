const queryString = location.search

const params = new URLSearchParams(queryString)

const id = params.get("_id");

const card = (data.events).find(events => events[0] == id);

const details = document.getElementById("cardDetail");

details.innerHTML = `
<div class="card mb-3 " style="max-width: 540px;">
   <div class="row g-0">
     <div class="col-md-4">
       <img src="${card.image}" class="img-fluid rounded-start" alt="...">
     </div>
     <div class="col-md-8">
       <div class="card-body">
         <h5 class="card-title">${card.name}</h5>
         <p class="card-text">${card.description}</p>
         <p class="card-text"><small class="text-muted">Category:${card.category} - Capacity:${card.capacity} </small></p>
         <p> Date: ${card.date} - Price: ${card.price}<p>
         <p> Assistance: ${card.assistance}</p>
       </div>
     </div>
   </div>
 </div> `

// const cardDetail = document.getElementById("cardDetail");

// let generatedDetails = createDetails(data.events);

// cardDetail.innerHTML = generatedDetails;

// function createDetails(cardsDate) {
//   let cards = "";
//   for (const card of cardsDate) {
//     cards = `
//         <div class="card mb-3 " style="max-width: 540px;">
//   <div class="row g-0">
//     <div class="col-md-4">
//       <img src="${card.image}" class="img-fluid rounded-start" alt="...">
//     </div>
//     <div class="col-md-8">
//       <div class="card-body">
//         <h5 class="card-title">${card.name}</h5>
//         <p class="card-text">${card.description}</p>
//         <p class="card-text"><small class="text-muted">Category:${card.category} - Capacity:${card.capacity} </small></p>
//         <p> Date: ${card.date} - Price: ${card.price}<p>
//         <p> Assistance: ${card.assistance}</p>
//       </div>
//     </div>
//   </div>
// </div> `;

//   return cards;


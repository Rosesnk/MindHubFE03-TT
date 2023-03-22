const url = 'https://mindhub-xj03.onrender.com/api/amazing'

let selected = []

let datosApi = {}

function createCards(card) {
    return `
        <div class="col cards"> 
            <a class="text-decoration-none text-reset"  href="./details.html?id=${card._id}">
                <div class="card" style = "width: 18rem; height: 450px;">
                        <img src="${card.image}" class="card-img-top" alt="..." style="width: 18rem; height: 200px;"> 
                        <div class="card-body h-auto d-inline-block" ><h5 class="card-title">${card.name}</h5 >
                            <p class="card-text">${card.description}</p>
                            <p> Date: ${card.date}<p>
                                <div class=" card-price-ver-mas row  text-center justify-content-evenly">
                                    <p class="precio col-5">Price: $${card.price}</p>
                                    <button id="verMas" type="button" class="btn col-5 btn-outline-primary btn-sm position-absolute  bottom-0 m-2" style="--bs-btn-padding-y: .15rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">Ver más</button>
                                </div>                        
                        </div >
                    </div >
                </a >
            </div > `;
    }


function chargeCategories(arrayCategories) {
    let categories = "";
    for (let i = 0; i < arrayCategories.length; i++) {
    categories += createCheckbox(arrayCategories[i], i);
    }
    return categories;
}

function createCheckbox(cat, i) {
    return `
    <div class="form-check form-check-inline m-0">
    <input class="form-check-input checked" type="checkbox" name="categories" id="categoria${i}" value="${cat}"   />
    <label class="form-check-label" for="categoria${i}">${cat}</label>
    </div>`;
}

function filterCheckbox(events, checkbox) {
    let eventfilter = [];
    if (checkbox.length > 0) {
    checkbox.forEach((categoria) => {
    events.forEach((event) => {
        if (event.category == categoria) {
        eventfilter.push(event);
        }
        });
    });
    } else {
    eventfilter = events;
    }
    return eventfilter;
}

function find() {
    let eventsFound = [];
    let eventCheckbox = filterCheckbox(datosApi.events, selected);
    eventsFound = eventCheckbox.filter((event) => {
        return eventFilters = (event.name.toLowerCase().includes(search.value.toLowerCase()));
    });
    return eventsFound;
}

function deleteDuplicate(array) {
    let only = [];
    for (let i = 0; i < array.length; i++) {
    if (!only.includes(array[i])) {
        only.push(array[i]);
    }
    }
    return only
}


function modificateArrayCheck(e) {
    if (e.checked) {//agrego elemento a la lista o lo saco
        selected.push(e.value);
    } else {
        selected.splice(selected.indexOf(e.value), 1);
    }
    let eventsFound = find();
    cardContainer.innerHTML = generatedCards(eventsFound);
}

fetch(url).then(response => response.json())
    .then(datosAPI => {
        //variable global
        datosApi = datosAPI
        //Cargo las tarjetas
        cardContainer.innerHTML = generatedCards(datosAPI.events);
        //Cargo los checkbox
        let filterCat = deleteDuplicate(datosAPI.events.map((cat) => cat.category));
        categories.innerHTML = chargeCategories(filterCat);
        //método de filtrado por checkbox
        let checksEvent = document.querySelectorAll('.checked');
        checksEvent.forEach((e) => {
            e.addEventListener('change', () => modificateArrayCheck(e));
        });
    }).catch(error => console.error(error.message))


//tarjetas
const cardContainer = document.getElementById('cardContainer');

//Checkbox
const categories = document.getElementById('category');

//Buscador
let search = document.getElementById('searchBox');
search.addEventListener('keyup', () => {
    let eventsFound = find();
    cardContainer.innerHTML = generatedCards(eventsFound);
});

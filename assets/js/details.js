const query = location.search;
let urlParams = new URLSearchParams(query)
let cardId = urlParams.get("id");
let all_events = data.events;
let details = all_events.find(el=> el.id == cardId)
const container_card_details = document.querySelector("#cards_details")

let structure_card = "";
structure_card += `
<div class="col-md-6">
    <img src="${details.image}" class="card-img-top" alt="${details.name}">
</div>
<div class="col-md-6">
    <div class="card-body">
        <h5 class="card-title">${details.name}</h5>
        <p class="card-text">${details.description}</p>
        <p><span>Category:</span> ${details.category}</p>
        <p><span>Date:</span> ${details.date}</p>
        <p class="card-text"><span>Place:</span> ${details.place}</p>
        <p class="card-text"><span>Capacity:</span> ${details.capacity}</p>
        <p class="card-text"><span>Assistance:</span> ${details.capacity}</p>
        <p><span>Price:</span>$${details.price}</p>
    </div>
</div>
`;
container_card_details.innerHTML = structure_card;

/*
console.log(urlParams);
console.log(cardId);
console.log(container_card_details);
console.log(details);
*/

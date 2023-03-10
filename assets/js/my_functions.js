//function that generate cards
let do_cards = (array) =>{
    let structure_card = "";
    array.forEach((el) => {
        structure_card += `
        <div class="card ">
            <img src="${el.image}" class="card-img-top" alt="${el.name}">
            <div class="card-body">
                <h5 class="card-title">${el.name}</h5>
                <p class="card-text">${el.description}</p>
                <p><span>Price: ${el.price}</span></p>
                <p><span>Date: ${el.date}</span></p>
                <p class="button" role="button"><a href="#">More...</a></p>
            </div>
        </div>
        `;
    });
    return structure_card;
}

// past events filter
let filter_events_past = (actual_date,array)=>{
    return array.filter(el=> actual_date>el.date);
}

//future events filter
let filter_future_events = (actual_date,array)=>{
    return array.filter(el=> actual_date<el.date);
}
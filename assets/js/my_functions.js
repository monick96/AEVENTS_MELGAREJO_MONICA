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
                <p><span>Price:</span> $${el.price}</p>
                <p><span>Date:</span> ${el.date}</p>
                <p class="button" role="button"><a href="./details.html?id=${el.id}">More...</a></p>
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

//function to do categories dinamicaly
let do_categories = (array) => {
    let structure = ""
    array.forEach((el, index) => {
        structure += `
        <label for="${el}"><input type="checkbox" name="category${el.index}" value="${el}">${el}</label>
        `
    })
    return structure
}

//funnction to selects dinamically//pendient
let do_categories_select = (array) => {
    let structure = ""
    array.forEach((el) => {
        structure += `
        <option value="">Select a category</option>
        <option value="${el}">${el}</option>
        `
    })
    return structure
}

//obtein all categories
let obtein_property = (array, property) => array.map(el => el[property]);
//filtro categoria.
//podria haberse hecho con set() no admite repeticiones, luego recorrerlo con for each o convertilo en array con arrayfrom()
let filter_unic_property = (array) => {
    return array.filter((category, position, array) => {
        return position === array.indexOf(category);
    });
}
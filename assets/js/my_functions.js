//function that generate cards
//do cards 2
let do_cards2 = (array,container) =>{
    if(array.length == 0){
        //console.log(container_card);
        return container.innerHTML = `<h5 class="col d-flex flex-column justify-content-center align-items-center" id="message">It was not found "${input.value}" between events!</h5>`;  
    }else{
        let structure_card = "";
    array.forEach((el) => {
        structure_card += `
        <div class="card" data-id ="${el.category}">
            <img src="${el.image}" class="card-img-top" alt="${el.name}">
            <div class="card-body">
                <h5 class="card-title">${el.name}</h5>
                <p class="card-text">${el.description}</p>
                <p><span>Price:</span> $${el.price}</p>
                <p><span>Date:</span> ${el.date}</p>
                <p class="button" role="button"><a href="./details.html?id=${el._id}">More...</a></p>
            </div>
        </div>
        `;
    });
    return structure_card;
    }
    
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
        <label for="${el}"><input type="checkbox" name="category${index}" value="${el}">${el}</label>
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

//filtered functions for input and checks
//funcion filtro checks

let filtered_from_input = (array,string) =>{
    filtered_array = array.filter(elemento => elemento.name.toLowerCase().includes(string.toLowerCase()))
    return filtered_array
}

let filtered_from_categories= (array)=>{
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    //console.log(checkboxes) 
    let arrayChecks = Array.from(checkboxes)
    let checksCheckeados = arrayChecks.filter(check => check.checked)
    if(checksCheckeados.length == 0){
        return array
    }
    
    let categories = checksCheckeados.map(check => check.value)
    let filtered_array = array.filter(elemento => categories.includes(elemento.category))
    //console.log(filtered_array)
    //console.log(checksCheckeados);
    //console.log(categories) 
    return filtered_array
}

//convinando filtros
let combined_filter = (e,array,container)=>{
    e.preventDefault();
    let first_filter = filtered_from_input(array,input.value);
    let second_filter = filtered_from_categories(first_filter);
    container.innerHTML = do_cards2(second_filter,container)
}






//function that generate cards
// let do_cards = (array) =>{
//     let structure_card = "";
//     array.forEach((el) => {
//         structure_card += `
//         <div class="card" data-id ="${el.category}">
//             <img src="${el.image}" class="card-img-top" alt="${el.name}">
//             <div class="card-body">
//                 <h5 class="card-title">${el.name}</h5>
//                 <p class="card-text">${el.description}</p>
//                 <p><span>Price:</span> $${el.price}</p>
//                 <p><span>Date:</span> ${el.date}</p>
//                 <p class="button" role="button"><a href="./details.html?id=${el.id}">More...</a></p>
//             </div>
//         </div>
//         `;
//     });
//     return structure_card;
// }

//funnction to do selects dinamically//pendient
/*
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
*/
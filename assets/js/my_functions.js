//function that generate cards
//do cards 2
let do_cards2 = (array, container) => {
    if (array.length == 0) {
        //console.log(container_card);
        return container.innerHTML = `<h5 class="col d-flex flex-column justify-content-center align-items-center" id="message">It was not found "${input.value}" between events!</h5>`;
    } else {
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

//paint table
let paint_table_data = (container,array)=>{
    let structure=""
    array.forEach((el)=>{
        structure += `
        <tr class="text-center">
            <td>${el.category}</td>
            <td>$${el.revenues}</td>
            <td >${el.porcentage}%</td>
        </tr>
        `
    })
    container.innerHTML= structure;
}

// past events filter
let filter_events_past = (actual_date, array) => {
    return array.filter(el => actual_date > el.date);
}

//future events filter
let filter_future_events = (actual_date, array) => {
    return array.filter(el => actual_date < el.date);
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

let filtered_from_input = (array, string) => {
    filtered_array = array.filter(elemento => elemento.name.toLowerCase().includes(string.toLowerCase()))
    return filtered_array
}

let filtered_from_categories = (array) => {
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    //console.log(checkboxes) 
    let arrayChecks = Array.from(checkboxes)
    let checksCheckeados = arrayChecks.filter(check => check.checked)
    if (checksCheckeados.length == 0) {
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
let combined_filter = (e, array, container) => {
    e.preventDefault();
    let first_filter = filtered_from_input(array, input.value);
    let second_filter = filtered_from_categories(first_filter);
    container.innerHTML = do_cards2(second_filter, container)
}
//function to obtein high event porcentage attendance
let high_event_attendance = (array) => {
    let high_event = array[0]
    array.forEach((el) => {
        if ((el.assistance / el.capacity * 100) > (high_event.assistance / high_event.capacity * 100)) {
            high_event = el;
        }

    })
    return high_event;
}
//function to obtein low event porcentage attendance
let low_event_attendance = (array) => {
    let low_event = array[0]
    array.forEach((el) => {
        if ((el.assistance / el.capacity * 100) < (low_event.assistance / low_event.capacity * 100)) {
            low_event = el;
        }

    })
    return low_event;
}

let porcentage_attendance = (assistance, capacity) => ((assistance / capacity) * 100).toFixed(2);

//function to obtein event with high capacity
let high_event_capacity = (array) => {
    let high_capacity = array[0]
    array.forEach((el) => {
        if ((el.capacity) > (high_capacity.capacity)) {
            high_capacity = el;
        }

    })
    return high_capacity;
}
//earnings by category
let category_revenues = (array) => {
    return array.reduce((acc, evento) => {
        if (acc[evento.category]) {
            acc[evento.category] += evento.price * evento.estimate;
        } else {
            acc[evento.category] = evento.price * evento.estimate;
        }
        return acc;
    }, {});
}
//estimated attendance by category up
let category_attendance = (array) => {
    return array.reduce((acc, e) => {
        if (acc[e.category]) {
            acc[e.category].estimate += e.estimate;
            acc[e.category].capacity += e.capacity;
        } else {
            acc[e.category] = {
                estimate: e.estimate,
                capacity: e.capacity,
            };
        }
        return acc;
    }, {})
    
}

let porcentage_category_attendance = (array_category)=>{
    let porcentage_attendance = {}
    for(let el in array_category){
        porcentage = (array_category[el].estimate/array_category[el].capacity * 100).toFixed(2)
        porcentage_attendance[el] = parseFloat(porcentage);
    }
    return porcentage_attendance;
}
//functions to past events

//earnings by category
let past_category_revenues = (array) => {
    return array.reduce((acc, evento) => {
        if (acc[evento.category]) {
            acc[evento.category] += evento.price * evento.assistance;
        } else {
            acc[evento.category] = evento.price * evento.assistance;
        }
        return acc;
    }, {});
}
//estimated attendance by category up
let past_category_attendance = (array) => {
    return array.reduce((acc, e) => {
        if (acc[e.category]) {
            acc[e.category].assistance += e.assistance;
            acc[e.category].capacity += e.capacity;
        } else {
            acc[e.category] = {
                assistance: e.assistance,
                capacity: e.capacity,
            };
        }
        return acc;
    }, {})
    
}

//calc porcentage
let past_porcentage_attendance = (array_category)=>{
    let porcentage_attendance = {}
    for(let el in array_category){
        porcentage = (array_category[el].assistance/array_category[el].capacity * 100).toFixed(2)
        porcentage_attendance[el] = parseFloat(porcentage);
    }
    return porcentage_attendance;
}

//unifico los objetos
let unify_array_info = (profit,assistance)=>{
    let evento = []
    for (let el in profit){
        evento.push({
            category: el,
            revenues: profit[el],
            porcentage:assistance[el]
        })
    }
    return evento
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
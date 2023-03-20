//contenedores y varibles

//let all_events = data.events;//array with all events
let container_card = document.getElementById("col-card-home");//capture div that going to contain cards
let container_categories_md = document.getElementById("category_md")
const FORM_CHECK = document.forms[0];
const FORM_SEARCH = document.forms[1];
let input = document.querySelector('#searcher');

fetch("https://mindhub-xj03.onrender.com/api/amazing") //default method get
    .then((response) => response.json())
    .then((data) =>{
        let all_events = data.events;//array with all events
        //events
        FORM_SEARCH.addEventListener('submit',(e)=>{
            combined_filter(e,all_events,container_card)

        });
        FORM_CHECK.addEventListener('change',(e)=>{
            combined_filter(e,all_events,container_card)
        });
        //funciones
        //function obtein unic categories & and show its
        let unic_categories = filter_unic_property(obtein_property(all_events, "category"));
        container_categories_md.innerHTML = do_categories(unic_categories);
        //function to do cards & insert cards 
        container_card.innerHTML = do_cards2(all_events,container_card);
})





//consoles

//console.log(container_card);
//console.log(container_card);
//console.log(all_cards);
//console.log(all_events);
//console.log(EVENTS);
//console.log(FORM_CHECK);
//console.log(input);
//console.log(FORM_SEARCH);
//console.log(document.forms)
//console.log(container_card);
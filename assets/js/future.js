//container and variables
// let all_events = data.events;
// let current_day = data.currentDate;
let container_card = document.getElementById("col-card-future");
let container_categories_md = document.getElementById("category_md");
const FORM_CHECK = document.forms[0];
const FORM_SEARCH = document.forms[1];
let input = document.querySelector('#searcher');

fetch("https://mindhub-xj03.onrender.com/api/amazing") //default method get
    .then((response) => response.json())
    .then((data)=>{
        let all_events = data.events;
        let current_day = data.currentDate;

        //events
        FORM_SEARCH.addEventListener('submit',(e)=>{
            combined_filter(e,future_events,container_card)

        });
        FORM_CHECK.addEventListener('change',(e)=>{
            combined_filter(e,future_events,container_card)
        });
                
        
        //functions
        //function to filter from date futures, to do cards 
        let future_events = filter_future_events(current_day,all_events);
        //function obtein unic categories & and show its
        let unic_categories = filter_unic_property(obtein_property(all_events, "category"));
        container_categories_md.innerHTML = do_categories(unic_categories);
        // insert cards 
        container_card.innerHTML = do_cards2(future_events,container_card);
        
    })









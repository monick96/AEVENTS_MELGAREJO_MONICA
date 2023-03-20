//containers and varuiables

// let all_events = data.events;
// let current_day= data.currentDate;
let container_past_cards = document.getElementById("col-card-past");
let container_categories_md = document.getElementById("category_md")
const FORM_CHECK = document.forms[0];
const FORM_SEARCH = document.forms[1];
let input = document.querySelector('#searcher');


fetch("https://mindhub-xj03.onrender.com/api/amazing") //default method get
    .then((response) => response.json())
    .then((data)=>{
        let all_events = data.events;
        let current_day= data.currentDate;



        //events
        FORM_SEARCH.addEventListener('submit',(e)=>{
            combined_filter(e,past_events,container_past_cards)

        });
        FORM_CHECK.addEventListener('change',(e)=>{
            combined_filter(e,past_events,container_past_cards)
        });


        //functions
        //function obtein unic categories & and show its
        let unic_categories = filter_unic_property(obtein_property(all_events, "category"));
        container_categories_md.innerHTML = do_categories(unic_categories);
        //function to filter cards
        let past_events= filter_events_past(current_day,all_events);
         //& insert cards
        container_past_cards.innerHTML = do_cards2(past_events,container_past_cards);

    })





// console.log(all_events);
// console.log(current_day);
// console.log(past_events);
// console.log(past_cards);
// console.log(container_past_cards);
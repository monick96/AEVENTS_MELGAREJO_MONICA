//containers and varuiables

let all_events = data.events;
let current_day= data.currentDate;
let container_past_cards = document.getElementById("col-card-past");
let container_categories_md = document.getElementById("category_md")
let past_events= filter_events_past(current_day,all_events);
const FORM_CHECK = document.forms[0];
const FORM_SEARCH = document.forms[1];
let input = document.querySelector('#searcher');

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
//function to filter ,to do cards 

//& insert cards 
container_past_cards.innerHTML = do_cards2(past_events,container_past_cards);
// console.log(all_events);
// console.log(current_day);
// console.log(past_events);
// console.log(past_cards);
// console.log(container_past_cards);

//eventos
// FORM_SEARCH.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let filtered_events = search_events(EVENTS,input.value);
//     show_events(filtered_events);
//     input.value = '';
// });

const EVENTS = document.querySelectorAll('.card')
console.log(EVENTS);
FORM_CHECK.addEventListener('change', (e) => {
    e.preventDefault();
    let filtered_events = filter_from_checks(EVENTS);
    show_events(filtered_events);
    console.log(show_events(filtered_events));
    console.log(filtered_events);
})
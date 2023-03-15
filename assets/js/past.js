//containers and varuiables

let all_events = data.events;
let current_day= data.currentDate;
let container_past_cards = document.getElementById("col-card-past");
let container_categories_md = document.getElementById("category_md")
//functions
//function obtein unic categories & and show its
let unic_categories = filter_unic_property(obtein_property(all_events, "category"));
container_categories_md.innerHTML = do_categories(unic_categories);
//function to filter ,to do cards 
let past_events= filter_events_past(current_day,all_events);
//& insert cards 
container_past_cards.innerHTML = do_cards(past_events);
// console.log(all_events);
// console.log(current_day);
// console.log(past_events);
// console.log(past_cards);
// console.log(container_past_cards);
//container and variables
let all_events = data.events;
let current_day = data.currentDate;
let container_future_card = document.getElementById("col-card-future");
let container_categories_md = document.getElementById("category_md");
//functions
//function obtein unic categories & and show its
let unic_categories = filter_unic_property(obtein_property(all_events, "category"));
container_categories_md.innerHTML = do_categories(unic_categories);
//function to filter, to do cards 
let future_events = filter_future_events(current_day,all_events);
// insert cards 
container_future_card.innerHTML = do_cards(future_events);
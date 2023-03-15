//contenedores y varibles
//array with all events
let all_events = data.events;
//capture div that going to contain cards
let container_card_home = document.getElementById("col-card-home");
let container_categories_md = document.getElementById("category_md")

//funciones
//function obtein unic categories & and show its
let unic_categories = filter_unic_property(obtein_property(all_events, "category"));
container_categories_md.innerHTML = do_categories(unic_categories);
//function to do cards & insert cards 
container_card_home.innerHTML = do_cards(all_events);
//console.log(container_card_home);
//console.log(container_card_home);
//console.log(all_cards);
//console.log(all_events_home);





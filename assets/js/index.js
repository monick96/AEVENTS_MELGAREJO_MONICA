//array with all events
let all_events_home = data.events;
console.log(all_events_home);
//capture div that going to contain cards
let container_card_home = document.getElementById("col-card-home");
console.log(container_card_home);
//function to do cards
let all_cards = do_cards(all_events_home);
console.log(all_cards);
//insert cards 
container_card_home.innerHTML = all_cards;
console.log(container_card_home);





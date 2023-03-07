let all_events = data.events;
let current_day =  new Date(data.currentDate);
let future_events = filter_events_future(current_day,all_events);
let container_future_card = document.getElementById("col-card-future")
let future_cards = do_cards(future_events)
container_future_card.innerHTML = future_cards;
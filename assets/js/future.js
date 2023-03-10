let all_events = data.events;
let current_day = data.currentDate;
let future_events = filter_future_events(current_day,all_events);
let container_future_card = document.getElementById("col-card-future")
container_future_card.innerHTML = do_cards(future_events);
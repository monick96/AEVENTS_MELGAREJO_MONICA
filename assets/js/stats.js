let container_high_attendace= document.querySelector('#high-attendace')
let container_low_attendace= document.querySelector('#low-attendace')
let container_larger_capacity =document.querySelector('#larger-capacity')
let container_second_table = document.querySelector("#second-table")
let container_past_table = document.querySelector('#last_table')

//logs
//console.log(container_high_attendace);
//console.log(container_low_attendace);
//console.log(container_larger_capacity);



fetch("https://mindhub-xj03.onrender.com/api/amazing") //default method get
.then((response) => response.json())
.then((data)=>{
    let all_events = data.events;
    let current_day= data.currentDate;
    let past_events = filter_events_past(current_day,all_events)
    let high_attendace = high_event_attendance(past_events);
    let low_attendance = low_event_attendance(past_events);
    let larger_capacity= high_event_capacity(past_events);
    //upcoming events
    let upcoming_events = filter_future_events(current_day,all_events)
    let profit_upcoming_events = category_revenues(upcoming_events)
    let porcentage_attendace_upcoming_categories= porcentage_category_attendance(category_attendance(upcoming_events))
    let all_info_upcoming = unify_array_info(profit_upcoming_events,porcentage_attendace_upcoming_categories);
    //past events
    let profit_past_events = past_category_revenues(past_events)
    let past_porcentage = past_porcentage_attendance(past_category_attendance(past_events))
    let all_info_past = unify_array_info(profit_past_events,past_porcentage)
    
    
    //insert in html
    //first table
    container_high_attendace.innerHTML = `${high_attendace.name} (${porcentage_attendance(high_attendace.assistance,high_attendace.capacity)})%`
    container_low_attendace.innerHTML = `${low_attendance.name} (${porcentage_attendance(low_attendance.assistance,low_attendance.capacity)})%`
    container_larger_capacity.innerHTML = `${larger_capacity.name} (${larger_capacity.capacity})`
    //upcoming table
    paint_table_data(container_second_table,all_info_upcoming)
    //past table
    paint_table_data(container_past_table,all_info_past)




    //functions
    
    
    //logs
    console.log(all_events);
    // console.log(past_events);
    // console.log(high_attendace);
    // console.log(low_attendance);
    // console.log(porcentage_attendance(low_attendance.assistance,low_attendance.capacity));
    // console.log(larger_capacity);
    // console.log(category_attendance(upcoming_events));
    // console.log(upcoming_events);
    // console.log(profit_upcoming_events);
    // console.log(porcentage_attendace_upcoming_categories);
    // console.log(all_info_upcoming);
    console.log(profit_past_events);
    console.log(past_porcentage);
    console.log(all_info_past);
})



const currentDate = moment();

function getWeekdaysNames() {
    return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
}

function renderWeekdays() {
    // map: string -> html

    const weekdays = getWeekdaysNames();

    // for(const weekday of weekdays){
    //     const li = document.createElement("li");
    //     li.innerText = weekday;
    // }

    const htmlElements = weekdays.map(function (weekday) {
        const li = document.createElement("li");
        li.innerText = weekday;
        return li;
    });
    
    const calendarWeekdaysContainer = document.querySelector(".calendar-weekdays");
    calendarWeekdaysContainer.innerHTML = "";
    calendarWeekdaysContainer.append(...htmlElements);
    // (li, li, li, li)
    // (...[li, li, li, li]) -> (li, li, li, li)
}

function renderCurrentDate() {
    const calendarCurrentDate = document.querySelector(".calendar-current-date");
    calendarCurrentDate.innerText = currentDate.format("MMMM YYYY");

    
    // calendarCurrentDate.style.backgroundColor = 'green';
}

// function renderDesignCalendarBackground() {
//     // const designCalendarBackground = document.querySelector (".body");
//     const monthInYear = currentDate.set("month", i);
    
    
//         for (let i = month(); i <= monthInYear; i++) {
//          const div = document.createElement("div");   
//          div.innerText = i.toString();
//             if (monthInYear.month() >= 5) {
//                 document.body.style.backgroundColor = "yellow";
//             }    
//         } 
//     }
function renderSeason() {
    let getMounth = document.getElementsByClassName('calendar-current-date');
    let getMounthText = getMounth[0].innerText;
    let arr = getMounthText.split('');
    console.log(arr);
    let arrCopy = arr.slice(0,-5);
    console.log(arrCopy);
    let letMonthText = arrCopy.join('');
    console.log(letMonthText);
    
    if (letMonthText == "March" || letMonthText =="April" || letMonthText =="May") {
        document.body.style.backgroundColor = "green";
    } else if (letMonthText == "June" || letMonthText =="July" || letMonthText =="August") {
        document.body.style.backgroundColor = "red";
    } else if (letMonthText == "September" || letMonthText =="October" || letMonthText =="November") {
        document.body.style.backgroundColor = "yellow";
    } else if (letMonthText == "December" || letMonthText =="January" || letMonthText =="February") {
        document.body.style.backgroundColor = "blue";
    } 
    
       


}
  

function renderDays() {

    const daysInMonth = currentDate.daysInMonth();
    const calendarDatesContainer = document.querySelector(".calendar-dates");
    calendarDatesContainer.innerHTML = "";

    const firstDayInMonth = currentDate.set("date", 1);
    const skipDaysCount = firstDayInMonth.weekday() - 1;
    
    for (let i = 0; i < skipDaysCount; i++) {
        const li = document.createElement("li");
        li.innerText = "";
        calendarDatesContainer.append(li);
    }

    const dateNow = moment();
    
    for (let i = 1; i <= daysInMonth; i++) {
        const li = document.createElement("li");
        li.innerText = i.toString();

        if(currentDate.format("MM-YYYY") === dateNow.format("MM-YYYY") && dateNow.date() === i){
            li.className = "active";
            
        }
        //  if(i == ) {
        // li.className = "red";
        // }
        const currentDay = currentDate.set("date", i);
        
        // Если текущий день - суббота или воскресенье, добавляем стиль для окраски в красный цвет
        if (currentDay.weekday() === 0 || currentDay.weekday() === 6) {
            li.style.color = "red";
            
        }

        calendarDatesContainer.append(li);

    }
    // for (let day = currentDate.startOf(3); day.isSameOrBefore(currentDate.endOf(5)); day.add(1, 'day')) {
    //     // Если день суббота или воскресенье, применяем стиль красного цвета
    //     if (day.day() === 6 || day.day() === 0) {
    //         console.log(day.format('YYYY-MM-DD') + ' - Красный');
    //     } else {
    //         console.log(day.format('YYYY-MM-DD'));
    //     }
    // }
    
   
}
// function renderMonthColor() {
//     let.
    
// }

function renderCalendar(){
    // renderDesignCalendarBackground()
    renderCurrentDate();
    renderSeason();
    renderWeekdays();
    renderDays();
    // renderWeekends();
    
}

const [prevBtn, nextBtn] = [...document.querySelectorAll(".calendar-navigation span")];

prevBtn.onclick = () => {
    currentDate.subtract(1, "month");
    renderCalendar();
}

nextBtn.onclick = () => {
    currentDate.add(1, "month");
    renderCalendar();
}


renderCalendar();


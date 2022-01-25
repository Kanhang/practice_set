const date = new Date();
const renderCalendar =()=>{
    date.setDate(1);
    const monthDays = document.querySelector(".days");
    const lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate(); 
    //get current month last day

    const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();
    //get previous month last day
    console.log(prevLastDay);
    const firstDayIndex= date.getDay();//// Sunday - Saturday : 0 - 6 return week day
    console.log(firstDayIndex);

    const lastDayIndex = new Date(date.getFullYear(),date.getMonth()+1,0).getDay();
    console.log(lastDayIndex);
    const nextDays= 7 - lastDayIndex-1; 
    //nextdays means how many days in next month we still need to add to the string;
    console.log(nextDays); // to get how many day left. 
    const months = ["January","February","March", "April", "May","June","July","August","September","October","November","December"];
    document.querySelector(".date h1").innerHTML =months[date.getMonth()];//put current month on title
    document.querySelector(".date p").innerHTML = new Date().toDateString();
    

    let days="";
    //because we are going to display 35 boxs or 42 boxes, however, one month only got 31 or 30 days,
    //so need to add the date from previous month or next month
    //add last day severals day
    // prevLastDay- x +1,  why need +1, because our index starts from 0,
    // if our index is 2 ,we only show 2 days from previous month, so it has +1,
    // 31 -2 =29 ,29 wont be showed, only 30 and 31 will be showed
    for (let x= firstDayIndex;x>0;x--){
        days +=`<div class="prev-date">${prevLastDay-x+1}</div>`;
    }
    console.log(days);
    // this is to add day of current month to calendar, and highlight current day
    for (let i = 1; i <= lastDay; i++) {
        if (
          i === new Date().getDate() &&
          date.getMonth() === new Date().getMonth()
        ) {
          days += `<div class="today">${i}</div>`;
        } else {
          days += `<div>${i}</div>`;
        }
      }
      
    console.log(days);
    //add the day for next days
      for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        console.log(days);
      }
      monthDays.innerHTML = days;
    };
    document.querySelector(".prev").addEventListener("click", () => {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
      });
      
      document.querySelector(".next").addEventListener("click", () => {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
      });
      
    


renderCalendar();
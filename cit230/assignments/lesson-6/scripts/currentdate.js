    //TODO: create scripte to get date fomat

    var today = new Date();
   
    //day of week
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    var dayOfWeek = weekday[today.getDay()];

    //year
    var fullYear = date.getFullYear();



    //Month
    var Month = new Array(11);
    weekday[0] = "January";
    weekday[1] = "February";
    weekday[2] = "March";
    weekday[3] = "April";
    weekday[4] = "May";
    weekday[5] = "June";
    weekday[6] = "July";
    weekday[7] = "August";
    weekday[8] = "September";
    weekday[9] = "October";
    weekday[10] = "November";
    weekday[11] = "December";
    
    var monthName = month[today.getMonth()];



    //day of Month

    var fullDate = dayOfWeek +', '+ today.getDate() + ' '+ monthName +', '+ fullYear;

    document.getElementById('currentYear').innerHTML = date.fullDate();

    var date = new Date();

    document.getElementById('copyright-year').innerHTML = date.getFullYear();
    
    
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




    //day of Month



    var date = new Date();

    document.getElementById('copyright-year').innerHTML = date.getFullYear();
    
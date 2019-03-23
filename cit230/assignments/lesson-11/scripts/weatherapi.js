var apiURLstring ="https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=79a71e2ee75dfba3b8815859ebb7d8f1&units=imperial"

var weatherRequest = new XMLHttpRequest();
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.responseType='json';
weatherRequest.send();

weatherRequest.onload= function(){
    var weatherData = weatherRequest.response;

    console.log(weatherData);

    document.getElementById("current-temp").innerHTML= weatherData.main.temp;
    document.getElementById("current-icon").setAttribute("src", 
    'http://openweathermap.org/img/w/' +
     weatherData.weather[0].icon +
     '.png');
     document.getElementById("current-humidity").innerHTML= weatherData.main.humidity;
     document.getElementById("current-wind").innerHTML= weatherData.wind.speed;
}

var apiURLstring ="https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=79a71e2ee75dfba3b8815859ebb7d8f1&units=imperial"

var forecastRequest = new XMLHttpRequest();
forecastRequest.open('Get', apiURLstring, true);
forecastRequest.responseType='json';
forecastRequest.send();

forecastRequest.onload= function(){
    var forecastData = forecastRequest.response;

    console.log(forecastData);

    document.getElementById("day1").innerHTML= forecastData.list[0].main.temp;
    document.getElementById("day2").innerHTML= forecastData.list[1].main.temp;
    document.getElementById("day3").innerHTML= forecastData.list[2].main.temp;
    document.getElementById("day4").innerHTML= forecastData.list[3].main.temp;
    document.getElementById("day5").innerHTML= forecastData.list[4].main.temp;

    document.getElementById("current-iconday1").setAttribute("src", 
    'http://openweathermap.org/img/w/' +
     forecastData.list[0].weather[0].icon +
     '.png');
     document.getElementById("current-iconday2").setAttribute("src", 
    'http://openweathermap.org/img/w/' +
    forecastData.list[1].weather[0].icon +
     '.png');
     document.getElementById("current-iconday3").setAttribute("src", 
    'http://openweathermap.org/img/w/' +
    forecastData.list[2].weather[0].icon +
     '.png');
     document.getElementById("current-iconday4").setAttribute("src", 
    'http://openweathermap.org/img/w/' +
    forecastData.list[3].weather[0].icon +
     '.png');
     document.getElementById("current-iconday5").setAttribute("src", 
    'http://openweathermap.org/img/w/' +
    forecastData.list[4].weather[0].icon +
     '.png');
}


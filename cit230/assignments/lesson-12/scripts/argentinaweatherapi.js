var apiURLstring ="https://api.openweathermap.org/data/2.5/weather?id=3435910&appid=79a71e2ee75dfba3b8815859ebb7d8f1&units=imperial"

var weatherRequest = new XMLHttpRequest();
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.responseType='json';
weatherRequest.send();

weatherRequest.onload= function(){
    var weatherData = weatherRequest.response;

    console.log(weatherData);

    document.getElementById("current-temp2").innerHTML= weatherData.main.temp;
    document.getElementById("current-icon2").setAttribute("src", 
    'http://openweathermap.org/img/w/' +
     weatherData.weather[0].icon +
     '.png');
     document.getElementById("current-humidity2").innerHTML= weatherData.main.humidity;
     document.getElementById("current-wind2").innerHTML= weatherData.wind.speed;
}


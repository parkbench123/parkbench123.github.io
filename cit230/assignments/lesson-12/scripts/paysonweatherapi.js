var apiURLstring ="https://api.openweathermap.org/data/2.5/weather?id=5779548&appid=79a71e2ee75dfba3b8815859ebb7d8f1&units=imperial"

var weatherRequest = new XMLHttpRequest();
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.responseType='json';
weatherRequest.send();

weatherRequest.onload= function(){
    var weatherData = weatherRequest.response;

    console.log(weatherData);

    document.getElementById("current-temp1").innerHTML= weatherData.main.temp;
    document.getElementById("current-icon1").setAttribute("src", 
    'http://openweathermap.org/img/w/' +
     weatherData.weather[0].icon +
     '.png');
     document.getElementById("current-humidity1").innerHTML= weatherData.main.humidity;
     document.getElementById("current-wind1").innerHTML= weatherData.wind.speed;
}


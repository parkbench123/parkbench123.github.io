var apiURLstring ="https://api.openweathermap.org/data/2.5/weather?id=3435910&appid=79a71e2ee75dfba3b8815859ebb7d8f1&units=imperial"

var weatherRequest3 = new XMLHttpRequest();
weatherRequest3.open('Get', apiURLstring, true);
weatherRequest3.responseType='json';
weatherRequest3.send();

weatherRequest3.onload= function(){
    var weatherData = weatherRequest3.response;

    console.log(weatherData);

    document.getElementById("current-temp2").innerHTML= weatherData.main.temp;
    document.getElementById("current-icon2").setAttribute("src", 
    'http://openweathermap.org/img/w/' +
     weatherData.weather[0].icon +
     '.png');
     document.getElementById("current-humidity2").innerHTML= weatherData.main.humidity;
     document.getElementById("current-wind2").innerHTML= weatherData.wind.speed;
}


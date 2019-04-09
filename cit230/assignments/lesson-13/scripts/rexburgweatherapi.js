var apiURLstring ="https://api.openweathermap.org/data/2.5/weather?id=5605242&appid=79a71e2ee75dfba3b8815859ebb7d8f1&units=imperial"

var weatherRequest1 = new XMLHttpRequest();
weatherRequest1.open('Get', apiURLstring, true);
weatherRequest1.responseType='json';
weatherRequest1.send();

weatherRequest1.onload= function(){
    var weatherData = weatherRequest1.response;

    console.log(weatherData);

    document.getElementById("current-temp").innerHTML= weatherData.main.temp;
    document.getElementById("current-icon").setAttribute("src", 
    'http://openweathermap.org/img/w/' +
     weatherData.weather[0].icon +
     '.png');
     document.getElementById("current-humidity").innerHTML= weatherData.main.humidity;
     document.getElementById("current-wind").innerHTML= weatherData.wind.speed;
}


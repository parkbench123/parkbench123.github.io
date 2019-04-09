var apiURLstring ="https://api.openweathermap.org/data/2.5/weather?id=5128581&appid=79a71e2ee75dfba3b8815859ebb7d8f1&units=imperial"

var weatherRequest4 = new XMLHttpRequest();
weatherRequest4.open('Get', apiURLstring, true);
weatherRequest4.responseType='json';
weatherRequest4.send();

weatherRequest4.onload= function(){
    var weatherData = weatherRequest4.response;

    console.log(weatherData);

    document.getElementById("current-temp3").innerHTML= weatherData.main.temp;
    document.getElementById("current-icon3").setAttribute("src", 
    'http://openweathermap.org/img/w/' +
     weatherData.weather[0].icon +
     '.png');
     document.getElementById("current-humidity3").innerHTML= weatherData.main.humidity;
     document.getElementById("current-wind3").innerHTML= weatherData.wind.speed;
}

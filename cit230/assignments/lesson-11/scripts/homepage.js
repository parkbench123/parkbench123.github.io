var section = document.querySelector('section');
var requestURL = 'https://parkbench123.github.io/cit230/assignments/lesson-12/json/templejsoninfo.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var templeData = request.response;
    showData(templeData);
}


function showData(jsonObj) {
    var check = 1;
    var temple = jsonObj['temples'];
    for (var i = 0; i < town.length; i++) {
        if (town[i].name == "Rexburg, Idaho" || town[i].name == "Payson, Utah" ||town[i].name == "Buenos Aires, Argentina" ||town[i].name == "Manhattan, NY")
        {
        var myArticle = document.createElement('article');
            myArticle.className = "templeData";
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');

        myH2.textContent = town[i].name;
        myPara1.textContent = 'Motto: ' + town[i].motto;
        myPara2.textContent = 'Year Founded: ' + town[i].yearFounded;
        myPara3.textContent = 'Telephone: ' + town[i].currentTelephone;
        myPara4.textContent = 'Year Announced: ' + town[i].yearAnnounced;
        
        
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        section.appendChild(myArticle);
    }
    }
}
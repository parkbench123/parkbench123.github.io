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
    for (var i = 0; i < temple.length; i++) {
        if (temple[i].name == "Rexburg, Idaho" || temple[i].name == "Payson, Utah" ||temple[i].name == "Buenos Aires, Argentina" ||temple[i].name == "Manhattan, New York")
        {
        var myArticle = document.createElement('article');
            myArticle.className = "templeData";
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');

        myH2.textContent = temple[i].name;
        myPara1.textContent = 'Motto: ' + temple[i].motto;
        myPara2.textContent = 'Year Founded: ' + temple[i].yearFounded;
        myPara3.textContent = 'Telephone: ' + temple[i].Telephone;
        myPara4.textContent = 'Year Announced: ' + temple[i].yearAnnounced;
        
        
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
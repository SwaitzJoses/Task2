//1. crete a request variable 

var request = new XMLHttpRequest();

//2. open a connection 

request.open('GET', 'https://restcountries.eu/rest/v2/' , true)  
//3. send the request 

request.send();

//4. load the response 

request.onload = function () {
    var data = JSON.parse(this.response);
    for(let i=0;i<250;i++){
    console.log(data[i].flag);
    }
}



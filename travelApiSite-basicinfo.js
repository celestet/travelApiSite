var key = "0ae2d9b438e34f87b06171525171502"
var travelURL = ""

function showInfo(data) {
    var city = data['location']['name']
    var state = data['location']['region']
    var country = data['location']['country']
var currentCity = data['location']['localtime']
var cityTemp = data['current']['temp_f']
var celsiustemp = data['current']['temp_c']
var cityWeather = data['current']['condition']['text']


  document.getElementById("travelinfocontainer").innerHTML = "City: "+ city + "<br>State: " + state + "<br>Country: " + country +"<br>Current Time: " + currentCity + "<br> Weather: " + cityWeather + " " + cityTemp + "°F " + celsiustemp + "°C"
////    document.getElementById("imagecontainer").innerHTML = imageString
// 
//} 
}

function makeRequest() {
  $.ajax({
   url: // what should go here?
      travelURL, 
    success: function(data) {
      showInfo(data)
    }
  })
}


function submit() {
var userInput = document.getElementById('city').value
travelURL = "https://api.apixu.com/v1/current.json?key=" + key + "&q=" + userInput
makeRequest()
}
    

var key = "0ae2d9b438e34f87b06171525171502"
var travelURL = ""

function showInfo(data) {
var currentCity = data['location']['localtime']
var cityTemp = data['current']['temp_f']
var cityWeather = data['current']['condition']['text']
var touristplace
 
  
 
    if(currentCity == "new york city"){
    var imageString = "<img src='images/nyc.jpg'>"
    touristplace = "5"
}
   else if(currentCity == "san francisco "){
     imageString = "<img src='images/sf.jpg'>"
     touristplace = ""
  }
   else if(currentCity == "seattle"){
      imageString = "<img src='images/seattle.jpg'>"
      touristplace = ""
  }
     else if(currentCity == "boston"){
     imageString = "<img src='images/boston.jpg'>"
     touristplace = ""
  }
   else if(currentCity == "los angeles"){
     imageString = "<img src='images/la.jpg'>"
     touristplace = ""
  }
   else if(currentCity == "washington dc"){
      imageString = "<img src='images/washingtondc.jpg'>"
      touristplace = ""
  }
     else if(currentCity == "chicago"){
     imageString = "<img src='images/chicago.jpg'>"
     touristplace = ""
  }
 else if(currentCity == "houston"){
      imageString = "<img src='images/houston-tx.jpg'>"
      touristplace = ""
  }
     else if(currentCity == "austin"){
     imageString = "<img src='images/austin-tx.jpg'>"
     touristplace = ""
  }
     else if(currentCity == "san diego"){
     imageString = "<img src='images/sandiego-midway.jpg'>"
     touristplace = ""
  }
  document.getElementById("travelinfocontainer").innerHTML = "Current Time: " + currentCity + " Weather: " + cityWeather + " " + cityTemp + "°F Most Popular Tourist Attractions:" + touristplace
    document.getElementById("imagecontainer").innerHTML = imageString
 
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

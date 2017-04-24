var key = "0ae2d9b438e34f87b06171525171502"
var travelURL = ""

function showInfo(data) {
var currentCity = data['location']['localtime']
var cityTemp = data['current']['temp_f']
var cityWeather = data['current']['condition']['text']
var touristplace
 
  
 
    if(currentCity == "new york city"){
    var imageString = "<img src='images/nyc.jpg'>"
    touristplace = "union square, statue of liberty, empire state building, central park, rockefeller center"
}
   else if(currentCity == "san francisco "){
     imageString = "<img src='images/sf.jpg'>"
     touristplace = "golden gate bridge, fishermans wharf, alcatraz, lombard street, cable car system"
  }
   else if(currentCity == "seattle"){
      imageString = "<img src='images/seattle.jpg'>"
      touristplace = "space needle, pike place market, chihuly garden and glass, experience music project muesuem, seattle great wheel"
  }
     else if(currentCity == "boston"){
     imageString = "<img src='images/boston.jpg'>"
     touristplace = "fanueil hall, fenway park, paul revere house, old north church, new england aquarium"
  }
   else if(currentCity == "los angeles"){
     imageString = "<img src='images/la.jpg'>"
     touristplace = "universal studios and citywalk, disneyland, hollywood(sign, walk of fame, wax muesuem, manschinese theater), santa monica(3rd street promenade and pier), LA Live(staples center, grammy mueseum)"
  }
   else if(currentCity == "washington dc"){
      imageString = "<img src='images/washingtondc.jpg'>"
      touristplace = "lincoln memorial, national mall, white house, national air and space muesuem, US capitol"
  }
     else if(currentCity == "chicago"){
     imageString = "<img src='images/chicago.jpg'>"
     touristplace = "cloud gate, navy pier, willis tower, magnificent mile, millenium park "
  }
 else if(currentCity == "houston"){
      imageString = "<img src='images/houston-tx.jpg'>"
      touristplace = "muesuem of fine arts, space center houston, houston muesuem of national sciences, menil collection, downtown aquarium"
  }
     else if(currentCity == "austin"){
     imageString = "<img src='images/austin-tx.jpg'>"
     touristplace = "texas state capitol, lady bird lake, barton springs pool, zilker park,lyndon baines johnson library"
  }
     else if(currentCity == "san diego"){
     imageString = "<img src='images/sandiego-midway.jpg'>"
     touristplace = "uss midway, seaworld, old town san diego, la jolla cove, balboa park"
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
